import { CourseService } from './select-course/course.service';
import { MainLayoutRoutes } from './main-layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule} from '@angular/material';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainLayoutRoutes,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    MainLayoutComponent,
    SelectCourseComponent,
    AddCourseModalComponent
  ],
  entryComponents: [AddCourseModalComponent],
  providers: [CourseService]
})
export class MainLayoutModule { }
