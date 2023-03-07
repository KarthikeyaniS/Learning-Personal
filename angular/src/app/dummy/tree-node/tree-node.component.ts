import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  // treeDate={
  //   name:'kjhg',
  //   checked:false,
  //   children:{
  //     name:'khjg',
  //     checked:false,
  //     grandchild:{
  //       name:'kjhg',
  //       checked:false,

  //     },
     

  //   }
  // }

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
              level3: [
                {
                  name: 'jhfg',
                  checked: false,
                  level4: [
                    {
                      name: 'devilkk',
                      checked: false,
                    },
                    {
                      name: 'd2hgf',
                      checked: false,
                    }
                  ]
                }
              ]
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
          grandChild: [
            {
              name: 'gc4',
              checked: false,
              level3: [
                {
                  name: 'kk',
                  checked: false,
                  level4: [
                    {
                      name: 'devil',
                      checked: false,
                    },
                    {
                      name: 'd2',
                      checked: false,
                    }
                  ]
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

  checkboxTrigger(i: any, arry: any,a:any) {

    // console.log(this.treeData)
    console.log(i.currentTarget.checked);
    // console.log();

    console.log(arry[0].children[0].grandChild);
    // if(arr[i])

    console.log('lvl3',arry[0].children[0].grandChild[0].level3);
    

    console.log(arry[0].currentTarget);
    if(arry[0]==this.treeData){

    }   
    this.findPath(i,arry,a);
    this.master(i, arry);
  }

  findPath(i:any,arry:any,k:any){
      console.log(k)
      console.log('kjhvcghjkl;kjhgfygvbnhjnm');
      
  }


  master(i: any, arry: any) {


    for (var j = 0; j < arry[0].children.length; j++) {
      arry[0].children[j].checked = i.currentTarget.checked;
      for (var k = 0; k < arry[0].children[0].grandChild.length; k++) {
        arry[0].children[j].grandChild[k].checked = i.currentTarget.checked;
        // console.log(arry[0].children[j].grandChild[k].level3[1]);
        
        // for (var l = 0; l < arry[0].children[0].grandChild[0].level3.length; l++) {
        //   // console.log(arry[0].children[j].grandChild[j].level3[]);
          
        //   arry[0].children[j].grandChild[k].level3[j].checked = i.currentTarget.checked;
        // }

      }


    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
