import { Course } from './../../model/index';
import { AddCourseModalComponent } from './../add-course-modal/add-course-modal.component';
import { PrincipalService } from './../../shared/principal.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CourseService } from './course.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css'],
})
export class SelectCourseComponent implements OnInit {

  constructor(
    private principal: PrincipalService,
    public courseService: CourseService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef
  ) {
      this.courseService.selectCourseSubject.subscribe(courses => {
        this.courses = Array.from(courses.values());
        this.ref.markForCheck();
      });

      this.courseService.startStatusSubject.subscribe(started => {
        this.started = started;
        this.ref.markForCheck();
      });
    }

  displayedColumns = ['no', 'times', 'actions'];
  courses: Course[] = Array.from(this.courseService.selectCourseSubject.getValue().values());
  started = this.courseService.startStatusSubject.getValue();


  ngOnInit() {
  }

  addCourse() {
    this.dialog.open(AddCourseModalComponent);
  }

  deleteCourse(courseNo: string) {
    this.courseService.deleteCourse(courseNo);
  }
}
