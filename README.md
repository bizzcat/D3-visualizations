# D3-visualizations
First set of D3js-based visualizations and corresponding metadata, with full frontend -> database -> backend integration

Proposal:
D3-visualizations/proposal.md


### Guidance for CodeGuild instructor
This code is a copy of the Django application containing my personal portfolio, thus some of the files are not relevant to the project.

Layout of relevant files for review:

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
