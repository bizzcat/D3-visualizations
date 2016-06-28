"""
Use this module to:
    - call on DOAJ api to get data for 'computer software' academic discipline
    - to clean pulled data
    - to put clean data in dictionary format
    - store data in Django models database

To perform all of the above, import api_pull in Django shell and call 'main()'

Else, call each function individually:
    total_pages = get_total_pages()
    data_list = get_raw_data(total_pages)
    article_list = clean_data(data_list)
    journal_object_list = get_journal_object_list(article_list)
    data_dict = create_data_dict(journal_object_list, article_list)
    store_data(data_dict)
"""

import math

import requests

from . import models

################################################ CALLING ON DAOJ API #########
def get_total_pages():
    """
    DOAJ's API responds with limited page sizes when called, so this function
    returns a total page count, which is passed to the next function to create
    a loop that calls each page.

    Calls on DOAJ API with pre-set subject query and page size
        (Computer Software, 100).
    Identifies total articles and page size.
    Returns total pages by dividing total articles by page size.
    """
    dummy_url = 'https://doaj.org/api/v1/search/articles/bibjson.subject.term%3Acomputer%20software?pageSize=100'
    dummy_data_raw = requests.get(dummy_url)
    dummy_data_json = dummy_data_raw.json()

    page_size = int(dummy_data_json['pageSize'])
    total_articles = int(dummy_data_json['total'])
    return math.ceil(total_articles / page_size)


def get_raw_data(total_pages):
    """
    Take in total_pages as argument that is used to call on API and pull data
    for every page.

    Loops through each page and pulls raw data.
    Appends data to a list.
    Returns list.
    """
    data_list = []
    looper = 1
    while looper <= total_pages:
        url = 'https://doaj.org/api/v1/search/articles/bibjson.subject.term%3Acomputer%20software?pageSize=100&page={}'.format(looper)
        request = requests.get(url)
        data = request.json()
        data_list.append(data)
        looper += 1
    return data_list


def clean_data(data_list):
    """
    Remove all articles from raw data that don't have the required info.

    Loops through data list and pulls each article.
    Passes articles through filters.
    Appends articles with requisite data to a list.
    Returns list of articles.
    """
    article_list = []
    for data in data_list:
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
    return article_list

################################################ CREATING DICTIONARY #########


def get_journal_object_list(article_list):
    """
    Loop through each article in article_list and returns a list of journal
    titles in object format.
    """
    journal_object_list = []
    for article in article_list:
        if article['bibjson']['journal']['title'] not in journal_object_list:
            journal_object_list.append(article['bibjson']['journal']['title'])
    return journal_object_list


def get_article_object(article):
    """Take in a single article and returns parsed data in object format."""
    article_name = article['bibjson']['title']
    article_kws = article['bibjson']['keywords']
    article_year = article['created_date'][0:4]
    article_id = article['id']
    article_url = article['bibjson']['link'][0]['url']
    return {'title': article_name, 'kws': article_kws, 'year': article_year, 'id': article_id, 'url': article_url}


def create_data_dict(journal_object_list, article_list):
    """
    Use Journal and Article objects lists to create a dictionary with proper
    hierarchy of data.

    Loops through journals and creates a dictionary object containing a list of
        keyword used in that journal.
    Loops through each keyword, in each journal, and creates a dictionary object
        containing every article for each keyword using get_article_object().
    Returns nested dictionary with journals assigned to keywords, and
        keywords assigned to articles.
    """
    journal_to_keywords = {}

    for journal in journal_object_list:
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
                        article_object = get_article_object(article)
                        keyword_to_articles[kw].append(article_object)

        journal_to_keywords[journal] = keyword_to_articles

    return journal_to_keywords

################################################ STORING IN DJANGO DB ########


def store_data(data_dict):
    """
    Loop through each stage of data dict and stores in Django DB (models),
    linking each stage together using one-to-many relationships.
    """
    field_name = 'Computer Software'
    field = models.Field(name=field_name)
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
                # PRINT DEBUGGING ###
                # print(str(journal))
                # print('\t' + str(kw))
                # print('\t\t' + str(article))

################################################ CALL ALL FUNCTIONS ##########

def main():
    total_pages = get_total_pages()
    data_list = get_raw_data(total_pages)
    article_list = clean_data(data_list)
    journal_object_list = get_journal_object_list(article_list)
    data_dict = create_data_dict(journal_object_list, article_list)
    store_data(data_dict)
