import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee, Experience } from './../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.page.html',
  styleUrls: ['./detail-employee.page.scss'],
})
export class DetailEmployeePage implements OnInit {

  public employee: Employee;
  Experiences = [];
  id: any;

  constructor(
    private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getEmployee(this.id).valueChanges().subscribe(res => {
      this.employee = res;
    });
  }

  ngOnInit() {
    this.experienceList();
  }

  experienceList() {
    this.fetchExperience();
    const experienceRes = this.aptService.getExperienceList();
    experienceRes.snapshotChanges().subscribe(res => {
      this.Experiences = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Experiences.push(a as unknown as Experience);
      });
    });
  }

  fetchExperience() {
    this.aptService.getExperienceList().valueChanges().subscribe();
  }
}
