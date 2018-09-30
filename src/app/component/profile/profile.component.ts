import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  personalForm: FormGroup;
  experienceForm: FormGroup;
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.formsInit();
  }

  formsInit() {
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      designation: [''],
      bio: [''],
    });

    this.experienceForm = this.fb.group({
      company: ['']
    });

    this.addressForm = this.fb.group({
      address: ['']
    });
  }

  finishStepper() {
    this.snackBar.open('Finish Successfully.', '', {
      duration: 2000,
    });
  }

}
