from django.shortcuts import render
from json import dumps
from . import logic

def render_index(request):
    return render(request, 'kw_data/index.html')

def render_tree_fun(request):
    return render(request, 'kw_data/tree_fun.html')

def render_radial_collapsible_page(request):
    '''
    * Imports data_json_object from logic and uses 'dumps' it into string format
    * Returns a rendering of the visualization page with JSON string as template arg
    '''
    data_json_str = dumps(logic.get_json_objects_from_models())
    template_args = {
        'data_json_str': data_json_str,
    }
    return render(request, 'kw_data/radial_collapsible.html', template_args)
