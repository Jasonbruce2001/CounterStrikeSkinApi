import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ItemHighlightComponent} from './item-highlight/item-highlight.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemHighlightComponent },];
