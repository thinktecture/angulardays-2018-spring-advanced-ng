import {Routes} from '@angular/router';
import {PictureComponent} from './picture/picture.component';
import {StarwarsComponent} from './starwars/starwars.component';
import {ViewComponent} from './view/view.component';

export const ROUTES: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'picture'
}, {
  path: 'picture',
  component: PictureComponent
}, {
  path: 'starwars/:id',
  component: StarwarsComponent
}, {
  path: 'lazy',
  loadChildren: 'app/lazy/lazy.module#LazyModule'
}, {
  path: 'boxes',
  component: ViewComponent
}];
