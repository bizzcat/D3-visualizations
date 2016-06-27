'use strict';

function addFieldHeader() {
  var fieldHeader = $('<h3></h3>').append(data_json_str['name']);
  $('#data-chart').prepend(fieldHeader);
}
addFieldHeader();

// function updateJournalOptions() {
//   var k = 1;
//   for (var index in data_json_str['children']) {
//     var journalObject = data_json_str['children'][index]
//     var journalName = journalObject['name']
//     var option = $('<option></option>').attr('value', k).append(journalName);
//     // console.log(option.text())
//     $('select[name=journal-name]').append(option);
//     k++;
//   }
// }
// updateJournalOptions();

function updateJournalNames() {
  var journalNames = [];
  for (var index in data_json_str['children']) {
    var journalObject = data_json_str['children'][index];
    journalNames.push(journalObject['name']);
  }
  return journalNames;
}
function displayJournalOptions() {
  var journalNames = updateJournalNames();
  for (var index in journalNames) {
    var journalName = journalNames[index];
    document.myform.journalName.options[index] = new Option(journalName, journalName, false, false);
  }
}



function updateKeywordNames() {
  var selectedJournalIndex = document.myform.journalName.selectedIndex;
  var keywordNames = [];
  for (var journalIndex in data_json_str['children']) {
    if (parseInt(journalIndex) === selectedJournalIndex) {
      for (var keywordIndex in data_json_str['children'][journalIndex]['_children']) {
        var keywordName = data_json_str['children'][journalIndex]['_children'][keywordIndex]['name'];
        keywordNames.push(keywordName);
      }
    }
  }
  return keywordNames;
}
function displayKeywordNames() {
  var keywordNames = updateKeywordNames();

  document.myform.articleName.options.length = 0;
  document.myform.kwName.options.length = 0;
  for (i = 0; i < keywordNames.length; i++) {
    var keywordName = keywordNames[i];
    document.myform.kwName.options[i] = new Option(keywordName, keywordName, false, false);
  }
}



function updateArticleNames() {
  var selectedJournalIndex = document.myform.journalName.selectedIndex;
  var selectedKeywordIndex = document.myform.kwName.selectedIndex;

  var articleNames = [];
  for (var journalIndex in data_json_str['children']) {

    if (parseInt(journalIndex) === selectedJournalIndex) {

      for (var keywordIndex in data_json_str['children'][journalIndex]['_children']) {

        if (parseInt(keywordIndex) === selectedKeywordIndex) {

          for (var articleIndex in data_json_str['children'][journalIndex]['_children'][keywordIndex]['_children']) {

            var articleName = data_json_str['children'][journalIndex]['_children'][keywordIndex]['_children'][articleIndex]['name'];
            articleNames.push(articleName);
          }
        }
      }
    }
  }
  return articleNames
}
function displayArticleNames() {
  var articleNames = updateArticleNames();

  document.myform.articleName.options.length = 0;
  for (i = 0; i < articleNames.length; i++) {
    var articleName = articleNames[i];
    document.myform.articleName.options[i] = new Option(articleName, articleName, false, false);
  }
}

displayJournalOptions();






// THIS IS WHERE THE ONLINE TEMPLATE IS USED.

var diameter = 1000;

var margin = {top: 20, right: 120, bottom: 20, left: 120},
  width = diameter,
  height = diameter;

var i = 0,
  duration = 350,
  root;

var tree = d3.layout.tree()
  .size([360, diameter/2 - 80])
  .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
  .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select('#chart').append('svg')
  .attr('width', width )
  .attr('height', height )
  .call(d3.behavior.zoom()
    .scaleExtent([0, 3])
    .on('zoom', function () {
    d3.select('g').attr('transform', 'translate(' + d3.event.translate + ')' + ' scale(' + d3.event.scale + ')')
    }))
  .append('g')
  .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')');

root = data_json_str;
root.x0 = diameter / 2;
root.y0 = diameter / 2;

root.children.forEach(collapse); // start with all children collapsed
update(root);

d3.select(self.frameElement).style('height', '1300px'); // beginning frame


/**
 * Takes in json string as root variable and assigns a node and text for each
 * json object
 */
function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Update the nodes…
  var node = svg.selectAll('g.node')
    .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    //.attr('transform', function(d) { return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')'; })
    .on('click', click);

  nodeEnter.append('circle')
    .attr('r', 1e-6)
    .style('fill', function(d) { return d._children ? 'lightsteelblue' : '#fff'; });

  nodeEnter.append('text')
    // .style('fill', function(d) { return d.depth === 1 ? 'green' : 'black'; }) ***************************USE THIS METHOD TO GENERATE AND APPEND A TEXT BOX WHEN SOMEONE CLICKS ON AN ARTICLE
    .attr('x', 10)
    .attr('dy', '.35em')
    .attr('text-anchor', 'start')
    //.attr('transform', function(d) { return d.x < 180 ? 'translate(0)' : 'rotate(180)translate(-' + (d.name.length * 8.5)  + ')'; })
    .text(function(d) { return d.name; })
    .style('fill-opacity', 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr('transform', function(d) { return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')'; })

  nodeUpdate.select('circle')
    .attr('r', 4.5)
    .style('fill', function(d) { return d._children ? 'lightsteelblue' : '#fff'; })
    // .attr('y', function(d) { return d.y * 300 } );

  nodeUpdate.select('text')
    .style('fill-opacity', 1)
    .attr('transform', function(d) { return 'translate(0)'; });

  var nodeExit = node.exit().transition()
    .duration(duration)
    //.attr('transform', function(d) { return 'diagonal(' + source.y + ',' + source.x + ')'; })
    .remove();

  nodeExit.select('circle')
    .attr('r', 1e-6);

  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // Update the links…
  var link = svg.selectAll('path.link')
    .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', function(d) {
      var o = {x: source.x0, y: source.y0};
      return diagonal({source: o, target: o});
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr('d', diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr('d', function(d) {
      var o = {x: source.x, y: source.y};
      return diagonal({source: o, target: o});
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.url) {
    var win = window.open(d.url, '_blank');
    win.focus();
  }
  if (d.children) {
    d._children = d.children;
    d.children = null;
  }
  else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

// Collapse nodes
function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}
