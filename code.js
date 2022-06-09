var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,

  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: ':parent',
      css: {
        'text-valign': 'top',
        'text-halign': 'center',
      }
    },
    {
      selector: 'edge',
      css: {
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

  elements: {
    nodes: [
        // rack1とその中身
      { data: { id: 'rack1'} },
      { data: { id: '1_1_rear', parent: 'rack1-1' }, position: { x: 215, y: 85 } },
      { data: { id: 'rack1-1', parent: 'rack1' } },
      { data: { id: '1_2_rear', parent: 'rack1-2' }, position: { x: 315, y: 85 } },
      { data: { id: 'rack1-2', parent:  'rack1'} },
      { data: { id: '1_3_rear', parent: 'rack1-3' }, position: { x: 415, y: 85 } },
      { data: { id: 'rack1-3', parent:  'rack1'} },
      { data: { id: '1_4_rear', parent: 'rack1-4' }, position: { x: 515, y: 85 } },
      { data: { id: 'rack1-4', parent:  'rack1'} },

      // rack1の前の通路
      { data: { id: 'node_1_1' }, position: { x: 115, y: 150 } },
      { data: { id: 'node_1_2' }, position: { x: 615, y: 150 } },

      // rack2とその中身
      { data: { id: 'rack2'} },
      { data: { id: '2_1_front', parent: 'rack2-1' }, position: { x: 215, y: 225 } },
      { data: { id: '2_1_rear', parent: 'rack2-1' }, position: { x: 215, y: 285 } },
      { data: { id: 'rack2-1', parent: 'rack2' } },
      { data: { id: '2_2_front', parent: 'rack2-2' }, position: { x: 315, y: 225 } },
      { data: { id: '2_2_rear', parent: 'rack2-2' }, position: { x: 315, y: 285 } },
      { data: { id: 'rack2-2', parent:  'rack2'} },
      { data: { id: '2_3_front', parent: 'rack2-3' }, position: { x: 415, y: 225 } },
      { data: { id: '2_3_rear', parent: 'rack2-3' }, position: { x: 415, y: 285 } },
      { data: { id: 'rack2-3', parent:  'rack2'} },
      { data: { id: '2_4_front', parent: 'rack2-4' }, position: { x: 515, y: 225 } },
      { data: { id: '2_4_rear', parent: 'rack2-4' }, position: { x: 515, y: 285 } },
      { data: { id: 'rack2-4', parent:  'rack2'} },

      // rack2の前の通路
      { data: { id: 'node_2_1' }, position: { x: 115, y: 350 } },
      { data: { id: 'node_2_2' }, position: { x: 615, y: 350 } },
      { data: { id: 'node_2_3' }, position: { x: 950, y: 350 } },

      // rack3の前の通路
      { data: { id: 'node_3_1' }, position: { x: 650, y: 450 } },
      { data: { id: 'node_3_2' }, position: { x: 950, y: 450 } },
      { data: { id: 'node_3_3' }, position: { x: 1100, y: 450 } },


      // rack3とその中身
      { data: { id: 'rack3'} },
      { data: { id: '3_1_front', parent: 'rack3-1' }, position: { x: 730, y: 550 } },
      { data: { id: 'rack3-1', parent: 'rack3' } },
      { data: { id: '3_2_front', parent: 'rack3-2' }, position: { x: 830, y: 550 } },
      { data: { id: 'rack3-2', parent:  'rack3'} },


      // station
      { data: { id: 'station' }, position: { x: 1100, y: 550 } },
    ],
    edges: [
      { data: { id: 'row_1', source: 'node_1_1', target: 'node_1_2' } },
      { data: { id: 'row_2_1', source: 'node_2_1', target: 'node_2_2' } },
      { data: { id: 'row_2_2', source: 'node_2_2', target: 'node_2_3' } },
      { data: { id: 'row_3_1', source: 'node_3_1', target: 'node_3_2' } },
      { data: { id: 'row_3_2', source: 'node_3_2', target: 'node_3_3' } },
      { data: { id: 'col_1', source: 'node_1_1', target: 'node_2_1' } },
      { data: { id: 'col_2', source: 'node_1_2', target: 'node_2_2' } },
      { data: { id: 'col_3', source: 'node_2_3', target: 'node_3_2' } },
      { data: { id: 'col_4', source: 'node_3_3', target: 'station' } },
    ]
  },

  layout: {
    name: 'preset',
    padding: 5
  }
});
