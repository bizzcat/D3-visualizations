# D3-visualizations (go to 'Notes on Reconstruction' to see files relevant for review)
This project is a basic visual representation of Academic Journal MetaData in the field of Computer Software. It displays journals publishing in that domain, the keywords they use, and all articles associated with that keyword. It is an interactive visualization created through D3js, a JavaScript based library.

HTML, CSS, and JS code for visualization hosted on CodePen: https://codepen.io/bizzcat/pen/ezpryq


## Guidance for CodeGuild instructor
1. This repository is a copy of my personal portfolio Django application, thus some of the files are not relevant to the project. Look below for a listing of relevant files.

2. Due to shortage of time, the code radial_collapsible.js was pulled from a D3 file found online, and is not a product of my own. Thus, it does not follow the styling and naming conventions required by the course. It is simply a borrowed template for visualizing the data I have pulled.

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
             index
                - index.css   

         templates
             kw_data
                - radial_collapsible.html
                - index.html

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

8. import api_pull to pull from API and populate local database using main() (takes ~3 minutes)
  - 'from kw_data import api_pull'
  - 'call main()'

9. exit shell
  - 'quit()'

10. run Python server
  - 'python manage.py runserver'

11. go to URL path '**LOCAL SERVER**/radial_collapsible' to view visualization


## FOR A FUN VISUALIZATION:
  - go to URL path '**LOCAL SERVER**/tree_fun'
  - or go to index page (blank URL path), and click on the blue and black PNG

# Notes on reconstruction
  - Changed all Javascript quotes to single quotation
  - .empty-block class'ed <div> in the index page was for content that was never added, therefore it has been deleted
  - adding new feature on page that allows client to sift through data in <select> <option> format (to satisfy JS requirements)
  - assigned this new feature its own .js .html and .css files (article_text_box)
  - Cleaned up HTML to appropriately use semantic elements
  - Cleaned up most JS and Python linter violations, leaving those that would hinder performance if fixed
  - For example - JS linter throws errors for not recognizing chaining multiple attributes to a single object like this:
        object.attr('height', height)
          .attr('width', width)
          .attr('href', data.url)


##### Layout of files for *review*
    kw_data
       kw_data
          - api_pull.py   (review: linter, docstring)
          - models.py  (review: linter, docstring)
          - logic.py  (review: linter, docstring)
          - views.py  (review: linter, docstring)

         static
             kw_data
                - article_text_box.js  (review: all of it)
                - article_text_box.css  (review: all of it)

         templates
             kw_data
                - article_text_box.html  (review: semantic elements layout)
