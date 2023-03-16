import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showQuestion: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getShowQuestionValue(value: boolean) {
    console.log(value);
    this.showQuestion = value;
  }

}
