import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-challenge-question',
  templateUrl: './challenge-question.component.html',
  styleUrls: ['./challenge-question.component.scss']
})
export class ChallengeQuestionComponent implements OnInit {
  @Output() showQuestion = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  responseQuestion() {
    this.showQuestion.emit(false);
  }
}
