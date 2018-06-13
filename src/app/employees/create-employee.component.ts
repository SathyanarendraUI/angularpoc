import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePickerComponent } from 'ngx-bootstrap/datepicker/datepicker.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // gender = 'female';
  // tslint:disable-next-line:comment-format
  //isActive = false;
  // tslint:disable-next-line:quotemark
  datePickerConfig: Partial<BsDatepickerConfig>;
  department: 3;
  departments: Department[] = [
    {
      id: 1,
      name: 'Help desk'
    },
    {
      id: 2,
      name: 'Human Resource'
    },
    {
      id: 3,
      name: 'Information Technology'
    },
    {
      id: 4,
      name: 'Finance'
    }
  ];

  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeakNumber: true,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'MM/DD/YYYY'
      }
    );
   }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
