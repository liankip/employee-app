import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  updateEmployeeForm: FormGroup;
  id: any;

  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
    ) {
      /* Get ID from firebase */
      this.id = this.actRoute.snapshot.paramMap.get('id');

      /* Call data from firebase and passing to html */
      this.aptService.getEmployee(this.id).valueChanges().subscribe(res => {
        this.updateEmployeeForm.setValue(res);
      });
    }

    ngOnInit() {
      this.updateEmployeeForm = this.fb.group({
        name: [''],
        email: [''],
        mobile: [''],
        salary: [''],
        joinDate: [''],
        address: [''],
        extraInfo: ['']
      });
    }

    updateForm() {
      if (!this.updateEmployeeForm.valid) {
        return false;
      } else {
        this.aptService.updateEmployee(this.id, this.updateEmployeeForm.value).catch(error => console.log(error));
        this.updateEmployeeForm.reset();
        this.router.navigate(['/home']);
      }
    }
}
