import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
url:string="http://localhost:8888/students";
  constructor(private http:HttpClient) {}

  public allStudents(){
    return this.http.get<Student[]>(this.url);
  }

  public addStudent(student:Student){
    return this.http.post(this.url,student)
  }

  public deleteStudent(id:number){
    return this.http.delete(this.url + "/" +id);
  }
}
