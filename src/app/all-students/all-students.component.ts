import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../Student';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-all-students',
  imports: [CommonModule, RouterModule], // Add RouterModule here
  standalone: true,
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'] // Correct "styleUrl" to "styleUrls"
})
export class AllStudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.allStudents();
  }

  allStudents() {
    this.studentService.allStudents().subscribe(next => {
      this.students = next;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(next => {
      this.allStudents();
    });
  }
}
