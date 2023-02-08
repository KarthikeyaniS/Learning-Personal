import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  dataUrl = 'http://localhost:3000/students'

  constructor(private http: HttpClient) { }
  
  //to get data from user
  getAllStudent() {
    return this.http.get(this.dataUrl);
  }

  //to add new data we're using post method
  saveStudentData(data: any) {
    return this.http.post(this.dataUrl, data)
  }

  // to delete the existing data
  deleteStudent(stuId: any) {
    return this.http.delete(`${this.dataUrl}/${stuId}`)
  }
 
  // to modify the existing data first we need to get the data and have to edit and store using `get and put` method
  getStudentbyId(id: any) {
    return this.http.get(`${this.dataUrl}/${id}`)
  }
  editStudent(id: any, data: any) {
    return this.http.put(`${this.dataUrl}/${id}`, data)
  }
  
}
