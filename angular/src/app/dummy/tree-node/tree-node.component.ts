import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  treeData = [
    {
      name: 'Root Node 1',
      checked: false,
      children: [
        {
          name: 'Child Node 1',
          checked: false,
          grandChild: [
            {
              name: 'gc1',
              checked: false,
            },
            {
              name: 'gc2',
              checked: false,
            }
          ]
        },
        {
          name: 'Child Node 2',
          checked: false,
          grandChild:[
            {
              name: 'gc4',
              checked: false,
              level3:[
                {
                  name:'kk',
                  checked:false,
                }
              ]
            },
            {
              name: 'gc3',
              checked: false,
            }
          ]

        }
      ]
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
