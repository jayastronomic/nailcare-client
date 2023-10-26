import { Component } from '@angular/core';
import { RegisterService } from '../services/register/register.service';
import User from '../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public registerService: RegisterService) {}

  handleSubmit(newUser: User) {
    this.registerService.createUser(newUser);
  }
}
