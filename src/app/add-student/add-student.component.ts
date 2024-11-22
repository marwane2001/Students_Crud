import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-add-student',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  formGroup!:FormGroup;

  constructor(private router:Router ,private serviceStudent:StudentService) {
    this.formGroup=new FormGroup(
      {
        name:new FormControl(''),
        age:new FormControl(''),
        gender:new FormControl(''),
        sector:new FormControl(''),
      }
    )
  }

  addStudent(){
    this.serviceStudent.addStudent(this.formGroup.value).subscribe(next => {
      this.router.navigate(['/allStudents']);
    });

  }
}
