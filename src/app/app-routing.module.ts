import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlarmWithoutChallengeComponent} from "./pages/alarm-without-challenge/alarm-without-challenge.component";
import {AlarmWithChallengeComponent} from "./pages/alarm-with-challenge/alarm-with-challenge.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'activate-with-challenge', component: AlarmWithChallengeComponent,  pathMatch: 'full' },
  { path: 'activate-without-challenge', component: AlarmWithoutChallengeComponent,  pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
