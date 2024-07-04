import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document, private contactService: ContactService) {}

  nameRegex = /^[a-zA-Z\s]+$/;
  emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  integerRegex = /^\d+$/;
  showMessage = false;

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(2), Validators.pattern(this.nameRegex)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(40), Validators.minLength(7), Validators.pattern(this.emailRegex)]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
    message: new FormControl("", [Validators.required])
  });

  getControl(name: any): AbstractControl | null {
    return this.registerForm.get(name);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerFn();
    } else {
      this.showMessage = true;
      this.registerForm.markAllAsTouched();
    }
  }

  registerFn() {
    this.showMessage = false;
    const formData = this.registerForm.value;

    this.contactService.submitForm(formData).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 201) {
          console.log('Form submitted successfully:', response);
          alert(`Thank you ${formData.name}! HPSV Studio will contact you soon.`);
        } else {
          console.error('Unexpected response:', response);
          alert('There was an error submitting the form. Please try again later.');
        }
      },
      (error: any) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again later.');
      }
    );
  }
}
