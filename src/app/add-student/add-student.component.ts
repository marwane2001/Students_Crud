import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Student';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string = "http://localhost:8888/students";

  constructor(private http: HttpClient) {}

  public allStudents() {
    return this.http.get<Student[]>(this.url);
  }

  public addStudent(student: Student) {
    return this.http.get<Student[]>(this.url).pipe(
      map(students => {
        const numericIds = students
          .map(s => s.id)
          .filter(id => !isNaN(id));
        const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0;
        student.id = maxId + 1;
        return student;
      }),
      switchMap(newStudent => this.http.post(this.url, newStudent))
    );
  }

  public deleteStudent(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}
