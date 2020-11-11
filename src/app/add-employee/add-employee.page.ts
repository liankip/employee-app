import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      salary: [''],
      joinDate: [''],
      address: [''],
      extraInfo: ['']
    });
  }

  formSubmit() {
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.aptService.createEmployee(this.employeeForm.value).catch(error => console.log(error));
      this.employeeForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
