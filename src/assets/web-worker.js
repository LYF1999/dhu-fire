const eventMap = new Map();

let user = undefined;
let courses = new Map();

let isStarted = false;

function onInit(user) {
  user = user;
}

function addCourse({ course }) {
  courses.set(course.no, course);
}

function deleteCourse({ courseNo }) {
  courses.delete(courseNo);
}

function start() {
  isStarted = true;
  postMessage(['started']);
}

function pause() {
  isStarted = false;
  postMessage(['paused']);
}

eventMap.set('init', onInit);
eventMap.set('addCourse', addCourse)
eventMap.set('deleteCourse', deleteCourse);
eventMap.set('start', start)
eventMap.set('pause', pause)

onmessage = function(e) {
  eventMap.get(e.data[0])(e.data[1]);
}
