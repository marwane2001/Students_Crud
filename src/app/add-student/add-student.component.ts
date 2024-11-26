import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  formGroup!: FormGroup;

  constructor(private router: Router, private serviceStudent: StudentService) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      age: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      gender: new FormControl('', [Validators.required]),
      sector: new FormControl('', [Validators.required])
    });
  }

  addStudent() {
    if (this.formGroup.valid) {
      this.serviceStudent.addStudent(this.formGroup.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
