import { RouterAccessService } from './../shared/router-access.service';
import { MainLayoutComponent } from './main-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { SelectCourseComponent } from './select-course/select-course.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [{
      path: '',
      component: SelectCourseComponent,
      data: {
        title: '选课'
      }
    }],
    canActivate: [RouterAccessService]
  },
];

export const MainLayoutRoutes = RouterModule.forChild(routes);
