import { CourseService } from './../select-course/course.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-course-modal',
  templateUrl: './add-course-modal.component.html',
  styleUrls: ['./add-course-modal.component.css']
})
export class AddCourseModalComponent implements OnInit {

  @Input() courseNo: string;

  constructor(
    private snackbar: MatSnackBar,
    private courseService: CourseService,
    private dialogRef: MatDialogRef<AddCourseModalComponent>
  ) { }

  ngOnInit() {
  }

  confirm() {
    if (this.courseService.selectCourseSubject.getValue().has(this.courseNo)) {
      this.snackbar.open(`${this.courseNo} 已经被添加`);
    }
    this.courseService.addCourse(this.courseNo);
    this.dialogRef.close();
  }
}
