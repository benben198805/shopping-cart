import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.css']
})
export class CountOperatorComponent implements OnInit {
  @Input() count: number;
  @Input() unit: string;
  @Output() countChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  addCount() {
    this.countChange.emit(this.count++);
  }

  minusCount() {
    this.countChange.emit(this.count--);
  }

}
