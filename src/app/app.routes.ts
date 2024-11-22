import { Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {AllStudentsComponent} from './all-students/all-students.component';

export const routes: Routes = [

  { path: '', redirectTo: '/allStudents', pathMatch: 'full' },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'allStudents', component: AllStudentsComponent }

];
