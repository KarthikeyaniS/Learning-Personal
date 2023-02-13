import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/students.service';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {


  stuData: any;
  alert: any = false;

  editStudent = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
    }
  );

  constructor(private student: StudentsService, private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.student.getStudentbyId(this.router.snapshot.params['id']).subscribe((sData: any) => {
      console.log(sData)
      this.editStudent = new FormGroup(
        { 
          name: new FormControl(sData['name']),
          email: new FormControl(sData['email']),
        }
      );
    })
    // console.log('wsdfcvcfdesw');
    // console.log(this.router.snapshot.params['id']);


  }
  updateData() {
    console.log(this.editStudent.value);

    this.student.editStudent(this.router.snapshot.params['id'], this.editStudent.value).subscribe((value: any) => {
      console.log(value);
      this.alert = true;

    })

  }

  close() {
    // this.alert = false;
  }
}
