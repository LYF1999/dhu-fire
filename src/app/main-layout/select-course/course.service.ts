import { WebWorkerService } from './../../shared/web-worker.service';
import { Course } from './../../model/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectCourseSubject: BehaviorSubject<Map<string, Course>> = new BehaviorSubject(new Map());

  startStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private $http: HttpClient, private webWorker: WebWorkerService) {

    this.webWorker.registerEvent('started', () => {
      this.publishStatus(true);
    });

    this.webWorker.registerEvent('paused', () => {
      this.publishStatus(false);
    });
  }

  addCourse(courseNo: string) {
    const course = { no: courseNo, times: 0 };
    this.webWorker.worker.postMessage(['addCourse', { course }]);
    this.selectCourseSubject.next(this.selectCourseSubject.getValue().set(courseNo, course));
  }

  deleteCourse(courseNo: string) {
    this.webWorker.worker.postMessage(['deleteCourse', { courseNo }]);
    const preMap = this.selectCourseSubject.getValue();
    preMap.delete(courseNo);
    this.selectCourseSubject.next(preMap);
  }

  publishStatus(started: boolean) {
    this.startStatusSubject.next(started);
  }

  start() {
    this.webWorker.worker.postMessage(['start']);
  }

  pause() {
    this.webWorker.worker.postMessage(['pause']);
  }
}
