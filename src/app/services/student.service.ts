import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../Student';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url: string = 'http://localhost:8888/students';
  private students: Student[] = [];
  private nextId: number = 1; // Start with 1 for sequential numeric IDs
  private studentsSubject: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

  constructor(private http: HttpClient) {
    // Load initial data from backend
    this.fetchAllStudents();
  }

  /**
   * Fetch all students from the backend and initialize local data.
   */
  private fetchAllStudents(): void {
    this.http.get<Student[]>(this.url).subscribe((students) => {
      this.students = students;
      // Ensure nextId is properly initialized
      this.nextId =
        students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;
      this.studentsSubject.next(this.students);
    });
  }

  /**
   * Get the observable for the students list.
   */
  public allStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }

  /**
   * Add a new student with a sequential numeric ID.
   * @param student The student data without an ID.
   */
  public addStudent(student: Student): Observable<Student> {
    student.id = this.nextId++; // Assign the next sequential ID
    this.students.push(student); // Update the local array
    this.studentsSubject.next(this.students); // Notify subscribers

    return this.http.post<Student>(this.url, student);
  }

  public deleteStudent(id: number): Observable<void> {
    this.students = this.students.filter((student) => student.id !== id);
    this.studentsSubject.next(this.students); // Notify subscribers

    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
