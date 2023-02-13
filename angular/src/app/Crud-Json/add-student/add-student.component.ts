import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/service/students.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  alert: any = false;

  addStudent = new FormGroup(
    {
      id:new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
    }
  );

  constructor(private student: StudentsService) { }

  ngOnInit(): void {
  }

  saveData() {
    // console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((data) => {
      console.log("werftghjhgf");
      
      console.log(data);
      this.alert = true;

    })

  }
  close() {
    this.alert = false;
  }


}
