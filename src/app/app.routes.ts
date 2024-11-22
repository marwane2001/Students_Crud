import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

export const routes: Routes = [
  { path: '', component: AllStudentsComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'deleteStudent', component: DeleteStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
