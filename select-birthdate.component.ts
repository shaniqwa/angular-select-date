import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'select-birthdate',
  styles: [],
  templateUrl: './select-birthdate.component.html',
  styleUrls: ['./select-birthdate.component.css' ]
})

export class FormSelectBirthdateComponent implements OnInit {
  @Input() parentGroup: FormGroup;
  selectedDay;
  selectedMonth;
  selectedYear;
  thisYear = moment().year();
  years = [];
  months = [
    { name: 'January', viewValue: '01', days: [] },
    { name: 'February', viewValue: '02', days: [] },
    { name: 'March', viewValue: '03', days: [] },
    { name: 'April', viewValue: '04', days: [] },
    { name: 'May', viewValue: '05', days: [] },
    { name: 'June', viewValue: '06', days: [] },
    { name: 'July', viewValue: '07', days: [] },
    { name: 'August', viewValue: '08', days: [] },
    { name: 'September', viewValue: '09', days: [] },
    { name: 'October', viewValue: '10', days: [] },
    { name: 'November', viewValue: '11', days: [] },
    { name: 'December', viewValue: '12', days: [] }
  ];
  days = [];
  ngOnInit() {
    this.updateDays('01');
    this.selectedMonth = '';
    for (let i = 1950 ; i <= this.thisYear ; i++) {
      this.years.push(i);
    }
    this.years.reverse();
    for (let month of this.months) {
      let daysInMonth = moment('2017-' + month.viewValue, 'YYYY-MM').daysInMonth();
      for ( let i = 1; i <= daysInMonth; i++ ) {
        month.days.push(i);
      }
    }
  }

  updateDays(newValue) {
    this.selectedMonth = newValue;
    const res = this.months.filter( (month) =>
    month.viewValue === this.selectedMonth);
    if (res.length) {
      this.days = res.pop().days;
    } else {
      // reset form was clicked
      this.days = [];
      this.selectedMonth = '';
      this.updateDays('01');
    }
  }
}
