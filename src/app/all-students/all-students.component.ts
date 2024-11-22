import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../Student';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-all-students',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent implements OnInit{
  students:Student[]=[];
  constructor(private studentService:StudentService) {
  }
ngOnInit() {
    this.allStudents();
}

allStudents(){
    this.studentService.allStudents().subscribe(next=>{
this.students=next;
    })
}


  deleteStudent(id:number) {
    this.studentService.deleteStudent(id).subscribe(next=>{
      this.allStudents();
    })
  }
}
