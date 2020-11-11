import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.page.html',
  styleUrls: ['./add-experience.page.scss'],
})
export class AddExperiencePage implements OnInit {

  experienceForm: FormGroup;
  id: any;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    private actRoute: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.experienceForm = this.fb.group({
      title: [''],
      company: [''],
      description: [''],
      yFirst: [''],
      yEnd: [''],
      employeeId: [this.id]
    });
  }

  formSubmit() {
    if (!this.experienceForm.valid) {
      return false;
    } else {
      this.aptService.createExperience(this.experienceForm.value).catch(error => console.log(error));
      this.experienceForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
