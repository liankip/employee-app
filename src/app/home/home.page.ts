import { Component } from '@angular/core';
// import { Appointment } from '../shared/Appointment';
import { Employee } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
import { AuthenticationService } from "../shared/authentication.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Employees = [];

  constructor(
    private aptService: AppointmentService,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.fetchEmployees();
    const employeeRes = this.aptService.getEmployeeList();
    employeeRes.snapshotChanges().subscribe(res => {
      this.Employees = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Employees.push(a as unknown as Employee);
      });
    });
  }

  fetchEmployees() {
    this.aptService.getEmployeeList().valueChanges().subscribe();
  }

  deleteEmployee(id, name) {
    if (window.confirm(`Anda yakin ingin menghapus ${name} ?`)) {
      this.aptService.deleteEmployee(id);
    }
  }
}
