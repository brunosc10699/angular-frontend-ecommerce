import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = this.formBuilder.group({
    name: ["", [
      Validators.required,
      Validators.minLength(4)
    ]],
    subject: ["", [
      Validators.required,
      Validators.minLength(10)
    ]],
    cellphone: ["", [
      Validators.required,
      Validators.minLength(11)
    ]],
    email: ["", [
      Validators.required,
      Validators.email
    ]],
    message: ["", [
      Validators.required,
      Validators.minLength(20)
    ]]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  sendMessage() {
    alert("Simulação de envio de mensagem realizada com sucesso!");
    this.contactForm.reset();
  }

}
