import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {
  formGroup!: FormGroup;

  constructor(private router: Router, private studentService: StudentService) {
    this.formGroup = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }

  deleteStudent() {
    if (this.formGroup.valid) {
      const id = this.formGroup.value.id;
      this.studentService.deleteStudent(id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
