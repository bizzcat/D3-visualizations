# D3-visualizations
This project is a basic visual representation of Academic Journal MetaData in the field of Computer Software. It displays journals publishing in that domain, the keywords they use, and all articles associated with that keyword. It is an interactive visualization created through D3js, a JavaScript based library.

HTML, CSS, and JS code for visualization hosted on CodePen: https://codepen.io/bizzcat/pen/ezpryq


## Guidance for CodeGuild instructor
1. This repository is a copy of my personal portfolio Django application, thus some of the files are not relevant to the project. Look below for a listing of relevant files.

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
                - index.html

2. Due to shortage of time, the code radial_collapsible.js was pulled from a D3 file found online, and is not a product of my own. Thus, it does not follow the styling and naming conventions required by the course. It is simply a borrowed template for visualizing the data I have pulled.


## setup

1. clone this repository
  - 'git clone https://github.com/bizzcat/D3-visualizations.git'

2. create a virtual environment
  - 'virtualenv venv'

3. activate the virtual environment
  - '. venv/bin/activate'

4. download Django using
  - 'pip3 install Django'

5. install pythons request module locally because it is not a built-in module
  - 'pip install requests'

6. enter command
  - 'python manage.py migrate'

7. open Django shell
  - 'python manage.py shell'

8. import api_pull to pull from API and populate local database (takes ~3 minutes)
  - 'from kw_data import api_pull'

9. exit shell
  - 'quit()'

10. run Python server
  - 'python manage.py runserver'

11. go to URL path '**LOCAL SERVER**/radial_collapsible' to view visualization





## FOR A FUN VISUALIZATION:
  - go to URL path '**LOCAL SERVER**/tree_fun'
  - or go to index page (blank URL path), and click on the blue and black PNG
