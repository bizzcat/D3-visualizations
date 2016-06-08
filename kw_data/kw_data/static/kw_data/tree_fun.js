'use strict';

// *******************************************************************************************************************
// Play around with uncommenting various seed groups and uncomment the corresponding ones in regenerate function

// Tree configuration
var branches = [];
// var seed1 = {i: 0, x: 1000, y: 1300, a: 0, l: 220, d: 0}; // a = angle, l = length, d = depth

// var seed2 = {i: 0, x: 650, y: 650, a: 2.095, l: 160, d: 0};
// var seed3 = {i: 0, x: 650, y: 650, a: -2.095, l: 160, d: 0};

// var seed2 = {i: 0, x: 650, y: 650, a: 0, l: 120, d: 0};
// var seed3 = {i: 0, x: 650, y: 650, a: 0, l: 120, d: 0};
// var seed4 = {i: 0, x: 650, y: 650, a: 0, l: 120, d: 0};
// var seed4 = {i: 0, x: 650, y: 650, a: 0, l: 120, d: 0};

// var seed1 = {i: 0, x: 650, y: 650, a: 0, l: 160, d: 0};
// var seed2 = {i: 0, x: 650, y: 650, a: 2.095, l: 160, d: 0};
// var seed3 = {i: 0, x: 650, y: 650, a: -2.095, l: 160, d: 0};
// var seed4 = {i: 0, x: 650, y: 650, a: 3.14, l: 80, d: 0};
// var seed5 = {i: 0, x: 650, y: 650, a: -1.045, l: 80, d: 0};
// var seed6 = {i: 0, x: 650, y: 650, a: 1.045, l: 80, d: 0};

// var seed1 = {i: 0, x: 650, y: 650, a: 0, l: 135, d: 0};
// var seed2 = {i: 0, x: 650, y: 650, a: 1, l: 120, d: 0};
// var seed3 = {i: 0, x: 650, y: 650, a: 2, l: 100, d: 0};
// var seed4 = {i: 0, x: 650, y: 650, a: 3, l: 90, d: 0};
// var seed5 = {i: 0, x: 650, y: 650, a: 4, l: 80, d: 0};
// var seed6 = {i: 0, x: 650, y: 650, a: 5, l: 70, d: 0};
// var seed7 = {i: 0, x: 650, y: 650, a: 6, l: 60, d: 0};
// var seed8 = {i: 0, x: 650, y: 650, a: 1, l: 50, d: 0};
// var seed9 = {i: 0, x: 650, y: 650, a: 2, l: 40, d: 0};
// var seed10 = {i: 0, x: 650, y: 650, a: 3, l: 30, d: 0};
// var seed11 = {i: 0, x: 650, y: 650, a: 4, l: 20, d: 0};
// var seed12 = {i: 0, x: 650, y: 650, a: 5, l: 10, d: 0};
// var seed13 = {i: 0, x: 650, y: 650, a: 6, l: 4, d: 0};


var see1 = {i: 0, x: 650+640, y: 650+340, a: -10.5, l: 225, d: 0};
var see2 = {i: 0, x: 650+610, y: 650+320, a: -9, l: 225, d: 0};
var see3 = {i: 0, x: 650+580, y: 650+300, a: -7.5, l: 225, d: 0};
var see4 = {i: 0, x: 650+555, y: 650+280, a: -6, l: 225, d: 0};
var see5 = {i: 0, x: 650+530, y: 650+260, a: -4.5, l: 225, d: 0};
var seed = {i: 0, x: 650+490, y: 650+240, a: -3, l: 220, d: 0};
var seed0 = {i: 0, x: 650+450, y: 650+220, a: -1.5, l: 215, d: 0};
var seed1 = {i: 0, x: 650+400, y: 650+200, a: 0, l: 210, d: 0};
var seed2 = {i: 0, x: 650+350, y: 650+150, a: 1, l: 190, d: 0};
var seed3 = {i: 0, x: 650+300, y: 650+100, a: 2, l: 160, d: 0};
var seed4 = {i: 0, x: 650+250, y: 650+60, a: 3, l: 140, d: 0};
var seed5 = {i: 0, x: 650+200, y: 650+10, a: 4, l: 125, d: 0};
var seed6 = {i: 0, x: 650+150, y: 650-60, a: 5, l: 110, d: 0};
var seed7 = {i: 0, x: 650+90, y: 650-130, a: 6, l: 95, d: 0};
var seed8 = {i: 0, x: 650+40, y: 650-210, a: 1, l: 80, d: 0};
var seed9 = {i: 0, x: 650-10, y: 650-280, a: 2, l: 60, d: 0};
var seed10 = {i: 0, x: 650-110, y: 650-330, a: 3, l: 50, d: 0};
var seed11 = {i: 0, x: 650-200, y: 650-360, a: 4, l: 40, d: 0};
var seed12 = {i: 0, x: 650-280, y: 650-395, a: 4.5, l: 30, d: 0};
var seed13 = {i: 0, x: 650-330, y: 650-415, a: 5, l: 20, d: 0};
var seed14 = {i: 0, x: 650-370, y: 650-450, a: 5.5, l: 15, d: 0};
var seed15 = {i: 0, x: 650-400, y: 650-470, a: 6, l: 12, d: 0};
var seed16 = {i: 0, x: 650-420, y: 650-485, a: 6, l: 9, d: 0};
var seed17 = {i: 0, x: 650-440, y: 650-500, a: 6, l: 6, d: 0};
var seed18 = {i: 0, x: 650-450, y: 650-515, a: 6, l: 4, d: 0};
var seed19 = {i: 0, x: 650-460, y: 650-530, a: 6, l: 3, d: 0};


function regenerate(initialise) {
  branches = [];
  setTimeout(function() {
    branch(seed19);
    create();
  }, 100);
  setTimeout(function() {
    branch(seed18);
    create();
  }, 200);
  setTimeout(function() {
    branch(seed17);
    create();
  }, 300);
  setTimeout(function() {
    branch(seed16);
    create();
  }, 400);
  setTimeout(function() {
    branch(seed15);
    create();
  }, 500);
  setTimeout(function() {
    branch(seed14);
    create();
  }, 1000);
  setTimeout(function() {
    branch(seed13);
    create();
  }, 1500);
  setTimeout(function() {
    branch(seed12);
    create();
  }, 3000);
  setTimeout(function() {
    branch(seed11);
    create();
  }, 4500);
  setTimeout(function() {
    branch(seed10);
    create();
  }, 6000);
  setTimeout(function() {
    branch(seed9);
    create();
  }, 7500);
  setTimeout(function() {
    branch(seed8);
    create();
  }, 9000);
  setTimeout(function() {
    branch(seed7);
    create();
  }, 10500);
  setTimeout(function() {
    branch(seed6);
    create();
  }, 12000);
  setTimeout(function() {
    branch(seed5);
    create();
  }, 13500);
  setTimeout(function() {
    branch(seed4);
    create();
  }, 15000);
  setTimeout(function() {
    branch(seed3);
    create();
  }, 16500);
  setTimeout(function() {
    branch(seed2);
    create();
  }, 18000);
  setTimeout(function() {
    branch(seed1);
    create();
  }, 19500);
  setTimeout(function() {
    branch(seed0);
    create();
  }, 21000);
  setTimeout(function() {
    branch(seed);
    create();
  }, 22500);
  setTimeout(function() {
    branch(see5);
    create();
  }, 24000);
  setTimeout(function() {
    branch(see4);
    create();
  }, 24500);
  setTimeout(function() {
    branch(see3);
    create();
  }, 25000);
  setTimeout(function() {
    branch(see2);
    create();
  }, 25500);
  setTimeout(function() {
    branch(see1);
    create();
  }, 26000);
  // branch(seed11);
  // branch(seed10);
  // branch(seed9);
  // branch(seed8);
  // branch(seed7);
  // branch(seed6);
  // branch(seed5);
  // branch(seed4);
  // branch(seed3);
  // branch(seed2);
  // branch(seed1);
  // create();
}
//play around with color scheme

var da = 0.6; // Angle delta
var dl = 0.85; // Length delta (factor)
var ar = 0; // Randomness
var maxDepth = 7;


// end playing around! Don't touch below!
// *******************************************************************************************************************
// Tree creation functions
function branch(b) {
  var end = endPt(b), daR, newB;
  branches.push(b);

  if (b.d === maxDepth) {
    return;
  }

  if (b.d === 0) {
    daR = ar * Math.random() - ar * 0.5; // 0.3 * 0.5 = 0.15 - 0.3 = -0.15 * 0.5 = -0.15
    newB = {
      i: branches.length,
      x: end.x,
      y: end.y,
      a: b.a - da + daR - 0.4,
      l: b.l * dl,
      d: 1,
      parent: b.i
    };
    branch(newB);

    // Right branch
    daR = ar * Math.random() - ar * 0.5;
    newB = {
      i: branches.length,
      x: end.x,
      y: end.y,
      a: b.a + da + daR + 0.4,
      l: b.l * dl,
      d: 1,
      parent: b.i,
    };
    branch(newB);

    daR = ar * Math.random() - ar * 0.5;
    newB = {
      i: branches.length,
      x: end.x,
      y: end.y,
      a: b.a + daR,
      l: b.l * dl,
      d: 1,
      parent: b.i,
    };
    branch(newB);
  }
  //
  // if (b.d === 4) {
  //   daR = ar * Math.random() - ar * 0.5; // 0.3 * 0.5 = 0.15 - 0.3 = -0.15 * 0.5 = -0.15
  //   newB = {
  //     i: branches.length,
  //     x: end.x,
  //     y: end.y,
  //     a: b.a - da + daR,
  //     l: b.l * dl,
  //     d: 5,
  //     parent: b.i
  //   };
  //   branch(newB);
  //
  //   // Right branch
  //   daR = ar * Math.random() - ar * 0.5;
  //   newB = {
  //     i: branches.length,
  //     x: end.x,
  //     y: end.y,
  //     a: b.a + da + daR,
  //     l: b.l * dl,
  //     d: 5,
  //     parent: b.i,
  //   };
  //   branch(newB);
  //
  //   daR = ar * Math.random() - ar * 0.5; // 0.3 * 0.5 = 0.15 - 0.3 = -0.15 * 0.5 = -0.15
  //   newB = {
  //     i: branches.length,
  //     x: end.x,
  //     y: end.y,
  //     a: (b.a - da) * 1.3,
  //     l: b.l * dl,
  //     d: 5,
  //     parent: b.i
  //   };
  //   branch(newB);
  //
  //   // Right branch
  //   daR = ar * Math.random() - ar * 0.5;
  //   newB = {
  //     i: branches.length,
  //     x: end.x,
  //     y: end.y,
  //     a: (b.a + da) * 1.3,
  //     l: b.l * dl,
  //     d: 5,
  //     parent: b.i,
  //   };
  //   branch(newB);
  //
  //   daR = ar * Math.random() - ar * 0.5;
  //   newB = {
  //     i: branches.length,
  //     x: end.x,
  //     y: end.y,
  //     a: b.a + daR,
  //     l: b.l * dl,
  //     d: 5,
  //     parent: b.i,
  //   };
  //   branch(newB);
  // }

  // Left branch
  daR = ar * Math.random() - ar * 0.5; // 0.3 * 0.5 = 0.15 - 0.3 = -0.15 * 0.5 = -0.15
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a - da + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);

  // Right branch
  daR = ar * Math.random() - ar * 0.5;
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a + da + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i,
  };
  branch(newB);
}





function endPt(b) {
  // Return endpoint of branch
  var x = b.x + b.l * Math.sin( b.a );
  var y = b.y - b.l * Math.cos( b.a );
  return {x: x, y: y};
}


// D3 functions

var color = d3.scale.linear()
    .domain([0, maxDepth * 0.4, maxDepth * 0.99, maxDepth])
    // .range(["green","red","yellow","blue"]);
    .range(["black","blue","white","black"]);

function x1(d) {return d.x;}
function y1(d) {return d.y;}
function x2(d) {return endPt(d).x;}
function y2(d) {return endPt(d).y;}
function highlightParents(d) {
  var colour = d3.event.type === 'mouseover' ? 'green' : color(d.d);
  var depth = d.d;
  for (var i = 0; i <= depth; i++) {
    d3.select('#id-'+parseInt(d.i))
      .style('stroke', colour);
    d = branches[d.parent];
  }
}


function create() {
  d3.select('svg')
    .append("g")
    .selectAll('line')
    .data(branches)
    .enter()
    .insert('line',":first-child")
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .style('stroke-width', function(d) {
        var t = parseInt( maxDepth * .5 + 2 - d.d * .55 );
        return  t + 'px';
    })
    .style('stroke', function(d) {
        return color(d.d);
    })
    .attr('id', function(d) {
      return 'id-'+d.i;
    })
    .attr('class', function(d) {
      if (d.d === maxDepth) {
        return 'artcl';
      }
      if (d.d === maxDepth - 1) {
        return 'ctg-3';
      }
      if (d.d === maxDepth - 2) {
        return 'ctg-2';
      }
      if (d.d === maxDepth - 3) {
        return 'jrnl';
      }
      if (d.d === maxDepth - 4) {
        return 'ctg-1';
      }
    });
}

function update() {
  d3.select('svg')
    .selectAll('line')
    .data(branches)
    .transition()
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2);
}

d3.selectAll('.regenerate')
  .on('click', regenerate);

regenerate(true);

d3.select('svg')
  .call(d3.behavior.zoom().scaleExtent([0.6, 10]).on("zoom", function () {
    d3.selectAll('g').attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
  }))
