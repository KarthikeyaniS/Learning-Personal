import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerProfileComponent } from './Crud-Json/customer-profile/customer-profile.component';
import { StudentDataComponent } from './Crud-Json/student-data/student-data.component';
import { AddStudentComponent } from './Crud-Json/add-student/add-student.component';
import { EditStudentComponent } from './Crud-Json/edit-student/edit-student.component';
import { ListStudentComponent } from './Crud-Json/list-student/list-student.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { TreeViewComponent } from './dummy/tree-view/tree-view.component';
import { TreeNodeComponent } from './dummy/tree-node/tree-node.component';
import { NavHeadComponent } from './Crud-Json/nav-head/nav-head.component'
@NgModule({
  declarations: [
    AppComponent,
    CustomerProfileComponent,
    StudentDataComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    TreeViewComponent,
    TreeNodeComponent,
    NavHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
