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
  @Output() removeItem = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addCount() {
    this.count++;
    this.countChange.emit(this.count);
  }

  minusCount() {
    this.count--;
    if (this.count > 0) {
      this.countChange.emit(this.count);
    } else if (this.count === 0) {
      this.removeItem.emit();
    }
  }

}
