"""
This module is used to pull data from the Django Models Database

Import get_json_objects_from_models() to return the data in json object
format. Returns as variable 'data_json_objects'.

'data_json_objects' hierarchy:

name: "Field name"
children:
    name: "Journal name"
    children:
        name: "Keyword name"
        children:
            name: "Article name"
            year: "Article year"
            url: "Article url"
"""

from . import models

def get_json_objects_from_models():
    """
    Pulls data from models and returns a properly structured dict in JSON
    format.
    """
    data_json_objects = {}   # final dict to be returned
    temp_journal_dict = {}   # temporary dict for looping
    temp_keyword_dict = {}   # temporary dict for looping
    temp_article_dict = {}   # temporary dict for looping

    for field in models.Field.objects.all():
        data_json_objects['name'] = field.name
        data_json_objects['children'] = []

        for journal in models.Journal.objects.filter(field=field):
            temp_journal_dict['name'] = journal.name
            temp_journal_dict['children'] = []

            for keyword in models.KeyWord.objects.filter(journal=journal):
                temp_keyword_dict['name'] = keyword.name
                temp_keyword_dict['children'] = []

                for article in models.Article.objects.filter(keyword=keyword):
                    temp_article_dict['name'] = article.name
                    temp_article_dict['year'] = article.year
                    temp_article_dict['url'] = article.url

                    temp_keyword_dict['children'].append(temp_article_dict)
                    temp_article_dict = {}

                temp_journal_dict['children'].append(temp_keyword_dict)
                temp_keyword_dict = {}

            data_json_objects['children'].append(temp_journal_dict)
            temp_journal_dict = {}

    return data_json_objects


######################## PRINT DEBUGGING ##########################

##### PRINTING OUT DATABASE
# for field in models.Field.objects.all():
#     print(str(field))
#     for journal in models.Journal.objects.filter(field=field):
#         print('\t' + str(journal))
#         for keyword in models.KeyWord.objects.filter(journal=journal):
#             print('\t\t' + str(keyword))
#             for article in models.Article.objects.filter(keyword=keyword):
#                 print('\t\t\t' + str(article))
#                 print("\t\t\t\t Year:  " + str(article.year))
#                 print("\t\t\t\t URL:  " + str(article.url))
#                 print("\n\n")


##### PRINTING JSON
# print(data_json_objects['name'])
# for journal in data_json_objects['children']:
#     print('\t' + journal['name'])
#
#     for keyword in journal['children']:
#         print('\t\t' + keyword['name'])
#
#         for article in keyword['children']:
#             print('\t\t\t' + article['name'])
#             print('\t\t\t' + article['year'])
#             print('\t\t\t' + article['url'])
