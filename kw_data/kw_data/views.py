"""
This module serves as the views page for the whole app that cooks up and serves
up a rendering for each template page.

View rendering functions:
    render_index
    render_tree_fun
    render_radial_collapsible
    render_article_text_box

Each of them are called in urls.py
"""

from json import dumps

from django.shortcuts import render

from . import logic


def render_index(request):
    """Render the index page. No template arguments required."""
    return render(request, 'kw_data/index.html')


def render_tree_fun(request):
    """
    Render the 'tree_fun' visualization page. No template arguments
    required.
    """
    return render(request, 'kw_data/tree_fun.html')


def render_radial_collapsible(request):
    """
    Import data_json_object from logic and uses 'dumps' it into JSON string
    format and returns a rendering of the visualization page with string as
    template arguement.
    """
    data_json_str = dumps(logic.get_json_objects_from_models())
    template_args = {
        'data_json_str': data_json_str,
    }
    return render(request, 'kw_data/radial_collapsible.html', template_args)


def render_article_text_box(request):
    """
    Import data_json_object from logic and uses 'dumps' it into JSON string
    format and returns a rendering of the article_text_box page with string as
    template arguement
    """
    data_json_str = dumps(logic.get_json_objects_from_models())
    template_args = {
        'data_json_str': data_json_str,
    }
    return render(request, 'kw_data/article_text_box.html', template_args)
