import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  stuData:any

  constructor(private student: StudentsService) { }


  ngOnInit(): void {
    this.student.getAllStudent().subscribe((sData) => {
      console.log(sData)
      this.stuData= sData;
    })
  }
  delStudent(id:any){
    // console.log(id)
    this.student.deleteStudent(id).subscribe((data)=>{
      console.log(id);
      this.ngOnInit();
      
    })

  }

}
