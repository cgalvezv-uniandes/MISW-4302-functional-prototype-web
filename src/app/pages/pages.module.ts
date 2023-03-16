import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ComponentsModule} from "../components/components.module";
import {MatGridListModule} from "@angular/material/grid-list";
import { AlarmWithChallengeComponent } from './alarm-with-challenge/alarm-with-challenge.component';
import { AlarmWithoutChallengeComponent } from './alarm-without-challenge/alarm-without-challenge.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    HomeComponent,
    AlarmWithChallengeComponent,
    AlarmWithoutChallengeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatGridListModule,
    MatButtonModule,
    RouterLink,
    MatInputModule,
  ]
})
export class PagesModule { }
