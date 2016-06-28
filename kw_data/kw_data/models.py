"""
This module contains the models used to stored the academic journal metadata
in multiple one-to-many layers

Field
    Attrs: self.name
    Parent: none
    Children: Journals

Journal
    Attrs: self.name
    Parent: Field
    Children: KeyWords

KeyWord
    Attrs: self.name
    Parent: Journal
    Children: Articles

Article
    Attrs: self.name, self.year, self.url
    Parent: Keyword
    Children: none
"""

from django.db import models


class Field(models.Model):
    """Takes in an academic discipline's name and instantiates as object."""

    name = models.TextField(default='This is a Field Name')

    def __str__(self):
        return self.name

    def __repr__(self):
        return '(Field = {!r})'.format(self.name)


class Journal(models.Model):
    """Takes in a journal title as name, Field object as parent."""

    name = models.TextField(default='This is a Journal Title')
    field = models.ForeignKey(Field)

    def __str__(self):
        return self.name

    def __repr__(self):
        return '(Journal = {!r})'.format(self.name)


class KeyWord(models.Model):
    """Takes in a keyword as name, and Journal object as parent."""

    name = models.TextField(default='This is a Keyword')
    journal = models.ForeignKey(Journal)

    def __str__(self):
        return self.name

    def __repr__(self):
        return '(Keyword = {!r})'.format(self.name)


class Article(models.Model):
    """Takes in an article title as name, and both KeyWord object and Journal
    Object as parents."""

    name = models.TextField(default='This is a Keyword')
    journal = models.ForeignKey(Journal)
    keyword = models.ForeignKey(KeyWord)

    year = models.TextField(default='1992')
    url = models.TextField(default='XXX.com')

    def __str__(self):
        return self.name

    def __repr__(self):
        return '(Article = {!r})'.format(self.name)
