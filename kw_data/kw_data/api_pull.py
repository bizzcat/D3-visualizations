import requests
import json
import math
from . import models


################################################ CALLING ON DAOJ API ################################################
def get_total_pages():
    '''
    DOAJ's API responds with limited page sizes when called, so this function
    returns a total page count, which is passed to the next function to create a
    loop that calls each page.

    * Calls on DOAJ API with pre-set subject query and page size
    * Identifies total articles and page size
    * Returns total pages
    '''
    dummy_URL = 'https://doaj.org/api/v1/search/articles/bibjson.subject.term%3Acomputer%20software?pageSize=100'
    dummy_data_raw = requests.get(dummy_URL)
    dummy_data_json = dummy_data_raw.json()

    page_size = int(dummy_data_json['pageSize'])
    total_articles = int(dummy_data_json['total'])
    return math.ceil(total_articles / page_size)


def get_article_list(total_pages):
    '''
    * Loops through each page and pulls each article
    * Passes articles through filters
    * Appends articles with requisite data to a list
    * Returns list of articles
    '''
    article_list = []
    looper = 1
    while looper <= total_pages:
        url = 'https://doaj.org/api/v1/search/articles/bibjson.subject.term%3Acomputer%20software?pageSize=100&page={}'.format(looper)
        request = requests.get(url)
        data = request.json()
        for article in data['results'][0:]:
            if 'EN' in article['bibjson']['journal']['language']:
                if 'keywords' in article['bibjson']:
                    if 'subject' in article['bibjson']:
                        if 'title' in article['bibjson']:
                            if 'link' in article['bibjson']:
                                if 'url' in article['bibjson']['link'][0]:
                                    if 'id' in article:
                                        if 'created_date' in article:
                                            article_list.append(article)
        looper += 1

    return article_list


################################################ CREATING DICTIONARY ################################################
def create_data_dict(article_list):
    '''
    * Loops through each article in article_list and creates a list of journal titles
    * Loops through journals and creates a dictionary object containing a list of
        keyword used in that journal
    * Loops through each keyword, in each journal, and creates a dictionary object
        containing every article for each keyword
    * Returns nested dictionary with journals assigned to keywords, and keywords assigned to articles
    '''
    journals = []
    journal_to_keywords = {}

    for article in article_list:
        if article['bibjson']['journal']['title'] not in journals:
            journals.append(article['bibjson']['journal']['title'])

    for journal in journals:
        journal_keywords = []
        for article in article_list:
            if article['bibjson']['journal']['title'] == journal:
                article_kws = article['bibjson']['keywords']
                for kw in article_kws:
                    journal_keywords.append(kw)

        keyword_to_articles = {}
        for kw in journal_keywords:
            keyword_to_articles[kw] = []
            for article in article_list:
                if article['bibjson']['journal']['title'] == journal:
                    if kw in article['bibjson']['keywords']:

                        # Pulls out relevant data for each article
                        article_name = article['bibjson']['title']
                        article_kws = article['bibjson']['keywords']
                        article_year = article['created_date'][0:4]
                        article_id = article['id']
                        article_url = article['bibjson']['link'][0]['url']
                        the_article = {'title': article_name, 'kws': article_kws, 'year': article_year, 'id': article_id, 'url': article_url}

                        keyword_to_articles[kw].append(the_article)

        journal_to_keywords[journal] = keyword_to_articles

    return journal_to_keywords


################################################ STORING IN DJANGO DB ################################################
def store_data(data_dict):
    '''
    * Loops through each stage of the data dictionary and stores in Django DB (models),
        linking each stage together using one-to-many relationships
    '''

    field_name = 'Computer Software'
    field = models.Field(name=field)
    field.save()

    for journal in data_dict:
        journal_object = models.Journal(name=journal, field=field)
        journal_object.save()

        for kw in data_dict[journal]:
            keyword_object = models.KeyWord(name=kw, journal=journal_object)
            keyword_object.save()

            for article in data_dict[journal][kw]:
                article_object = models.Article(name=article['title'], year=article['year'], url=article['url'], keyword=keyword_object, journal=journal_object)
                article_object.save()
                # print(str(journal))
                # print('\t' + str(kw))
                # print('\t\t' + str(article))


################################################ CALL ALL FUNCTIONS ################################################

def main():
    total_pages = get_total_pages()
    article_list = get_article_list(total_pages)
    data_dict = create_data_dict(article_list)
    store_data(data_dict)

main()
