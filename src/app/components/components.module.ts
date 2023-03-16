import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {DataTableComponent} from "./data-table/data-table.component";
import {ClockComponent} from "./clock/clock.component";
import {ChallengeQuestionComponent} from "./challenge-question/challenge-question.component";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    DataTableComponent,
    ClockComponent,
    ChallengeQuestionComponent
  ],
  exports: [
    DataTableComponent,
    ClockComponent,
    ChallengeQuestionComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class ComponentsModule { }
