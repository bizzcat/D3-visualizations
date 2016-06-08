# D3-visualizations
This project is a basic visual representation of Academic Journal MetaData in the field of Computer Software. It displays journals publishing in that domain, the keywords they use, and all articles associated with that keyword. It is an interactive visualization created through D3js, a JavaScript based library.

HTML, CSS, and JS code for visualization hosted on CodePen: https://codepen.io/bizzcat/pen/ezpryq


### Guidance for CodeGuild instructor
This repository is a copy of my personal portfolio Django application, thus some of the files are not relevant to the project.


##### Layout of relevant files for review:

    kw_data
       kw_data
          - api_pull.py
          - models.py
          - logic.py
          - views.py
          - urls.py

         static
             kw_data
                - radial_collapsible.js        
                - radial_collapsible.css

         templates
             kw_data
                - radial_collapsible.html


### Usage
Simply clone this repository, activate the virtual environment, run the python server, and go to URL path '/radial_collapsible' to view visualization

FOR A FUN VISUALIZATION:
  - go to URL path '/tree_fun'
  - or go to index page (blank URL path), and click on the blue and black PNG
