# Capstone Proposal

### Name:

D3js-based Data Visualizations of Open Access Academic Journal MetaData


### High-Level Product:

It is going to generate SVG-based semi-interactive data visualizations from open access academic journal metadata. Identified goal is to guide the user through an interactive visual journey depicting the growth and stagnation of certain scientific domains, and give insight to current delineations of the known and the unknown.


### Specific Functionality:

Users will primarily interact with the SVG's using simple procedures such as hovering a mouse over an element, clicking to parse/zoom/collapse, dragging nodes with gravity attributes, etc..

There will be minimal user interaction with the dataset, keywords, etc.


### Technical ComponentS:

* D3js & SVG — for visualization and interactivity
* Javascript, jQuery, HTML & CSS — for front end
* Python — for data retrieval, parsing of relevant data, and sending to database
* Django — for storage of parsed data
* Original Data formats: XML, CSV, HTML-based web-scraping


### Following the data:

Raw data in either XML/CSV file, or an HTML web-scrape, will be drawn from the website one time. Relevant data will be parsed using Python, put into class instances, and piped to the DB for storage using Django's ORM. Only the data relevant for SVG generation will be extracted from the database (again, using Django). Then, fixed data is used to create fanciful fun visualizations!

Parsed and stored data objects will have these categories:

Academic discipline -- journal title -- key words / subcategories -- article -- article abstract -- date published

Object hierarchy will look something similar to this:

    Biomedicine

        -- Royal Academic Journal

            -- Genetic Engineering
                -- "Genetic engineering of terpenoid metabolism attracts bodyguards to Arabidopsis"
                -- Published on: 23 SEP 2009
                -- ABSTRACT

                -- ...article title...
                -- ...date published...
                -- ...abstract...

                -- ...article title...
                -- ...date published...
                -- ...abstract...

            -- ...key word...
                -- ...article title...
                -- ...date published...
                -- ...abstract...

        -- Journal of Biochemistry

            -- ...key word...
                -- ...article title...
                -- ...date published...
                -- ...abstract...

        -- Bioscience Academy

            -- ...key word...
                -- ...article title...
                -- ...date published...
                -- ...abstract...

XML file sample:

    <dc:subject xsi:type="dcterms:LCSH">Medicine</dc:subject>
        <dc:title> Royal Academic Journal </dc:title>
            <dc:subject xsi:type="dcterms:LCSH">Internal medicine</dc:subject>
                <dc:subject xsi:type="dcterms:LCSH">Diseases of the musculoskeletal system</dc:subject>
                    <dc:title>Croatian Economic Survey</dc:title>
                        <dc:date>2006-01-01T00:00:00Z</dc:date>
                        <dc:description>
                            O tabagismo é a segunda principal causa mundial de morte, sendo responsável pela morte de um a cada dez adultos (5 milhões por ano). Se os padrões atuais se mantiverem, em 2020 o tabagismo será a causa de 10 milhões de óbitos anuais, segundo a Organização Mundial da Saúde.
                        </dc:description>


### Visual


![alt tag](tree-example.png)

Each brannch in the hierarchy of this tree will be assigned data correspondingly with data hierarchy.

### Interactions

##### MOUSEOVER
highlights path

##### MOUSEOVER FOR TWO SECONDS
continues highlighting path and displays an alt-text containing the data attributes for that branch (ie: if user hovers over the second branch a alt-text displaying Journal Name would appear)

##### CLICK BRANCH
Pans that branch to be 'trunk' and all other branches below that path fade away.

##### CLICK LAST BRANCH
this last branch is a single article, so instead of panning the screen, it opens up a large text box containing the articles title, abstract, date (and potentially the authors, and the URL link, if I decided to parse more data)

##### SLIDE BAR
There will be a side bar displayed that is associated with the date of article publication, in which they see the tree grow as more and more articles are published by the selected journals



### I will need to employ:
- HTML web-scraping tools (Beautiful Soup)
- Proper python testing
- Proper file hierarchy / nesting
- An HTML and CSS based webpage for hosting of product


### Timeline and order:

1. D3js visualization and interactivity (1.5 to 2 weeks)
2. Data parsing and storage (1 week)
3. Syncing up Backend → DB → Visuals (3 days)
4. Beautifying front end w/ HTML & CSS and plugging in visuals (2 days)
