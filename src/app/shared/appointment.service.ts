import { Injectable } from '@angular/core';
import { Employee, Experience } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  employeeListRef: AngularFireList<any>;
  experienceListRef: AngularFireList<any>;
  employeeRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Tambah Pengalaman Kerja
  createExperience(exp: Experience) {
    return this.experienceListRef.push({
      title: exp.title,
      company: exp.company,
      description: exp.description,
      yFirst: exp.yFirst,
      yEnd: exp.yEnd,
      employeeId: exp.employeeId
    });
  }

  // Tambah Pegawai
  createEmployee(em: Employee) {
    return this.employeeListRef.push({
      name: em.name,
      email: em.email,
      mobile: em.mobile,
      salary: em.salary,
      joinDate: em.joinDate,
      address: em.address,
      extraInfo: em.extraInfo
    });
  }

  // Single Pegawai
  getEmployee(id: string) {
    this.employeeRef = this.db.object('/employee/' + id);
    return this.employeeRef;
  }

  // list Pengalaman Kerja
  getExperienceList() {
    this.experienceListRef = this.db.list('/experience');
    return this.experienceListRef;
  }

  // List Pegawai
  getEmployeeList() {
    this.employeeListRef = this.db.list('/employee');
    return this.employeeListRef;
  }

  // Update Pegawai
  updateEmployee(id, apt: Employee) {
    return this.employeeRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
      salary: apt.salary,
      joinDate: apt.joinDate,
      address: apt.address,
      extraInfo: apt.extraInfo
    });
  }

  // Delete
  deleteEmployee(id: string) {
    this.employeeRef = this.db.object('/employee/' + id);
    this.employeeRef.remove();
  }

}
