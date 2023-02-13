import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Crud-Json/add-student/add-student.component';
import { EditStudentComponent } from './Crud-Json/edit-student/edit-student.component';
import { ListStudentComponent } from './Crud-Json/list-student/list-student.component';
import { NavHeadComponent } from './Crud-Json/nav-head/nav-head.component';
import { TreeNodeComponent } from './dummy/tree-node/tree-node.component';
import { TreeViewComponent } from './dummy/tree-view/tree-view.component';

const routes: Routes = [
  { path:'crud', component:NavHeadComponent},
  { path: 'add', component: AddStudentComponent },
  { path: 'edit', component: EditStudentComponent },
  { path: 'list', component: ListStudentComponent },
  { path:'edit/:id', component:EditStudentComponent},

  { path:'', component:TreeViewComponent},
  { path:'tree-node', component:TreeNodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
