# D3-visualizations
This project has basic visual representations of Academic Journal MetaData in the field of Computer Software. It displays journals publishing in that domain, the keywords they use, and all articles associated with that keyword. It has both plain JS and D3js based visuals.

HTML, CSS, and JS code for radial_collapsible visual hosted on CodePen: https://codepen.io/bizzcat/pen/ezpryq

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

11. go to URL path
  - '**LOCAL SERVER**/radial_collapsible' to view D3-based radial visual
  - '**LOCAL SERVER**/tree_fun' to view D3-based fun swirlygig
  - '**LOCAL SERVER**/article_text_box' to view simple JS based data display box
  - '**LOCAL SERVER**/' to view incomplete home page
