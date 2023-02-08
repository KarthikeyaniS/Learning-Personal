import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Crud-Json/add-student/add-student.component';
import { EditStudentComponent } from './Crud-Json/edit-student/edit-student.component';
import { ListStudentComponent } from './Crud-Json/list-student/list-student.component';

const routes: Routes = [
  { path: 'add', component: AddStudentComponent },
  { path: 'edit', component: EditStudentComponent },
  { path: 'list', component: ListStudentComponent },
  { path:'edit/:id', component:EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
