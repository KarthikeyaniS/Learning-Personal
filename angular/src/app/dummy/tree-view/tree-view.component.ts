import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  sample = [{
    name: 'subha',
    age: 23
  },
  {
    name: 'avi',
    age: 23
  }
  ];

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
        { name: 'Child Node 2', checked: false }
      ]
    },
    {
      name: 'Root Node 2',
      checked: false,
      children: [
        { name: 'Child Node 3', checked: false },
        { name: 'Child Node 4', checked: false }
      ]
    }
  ];

}
