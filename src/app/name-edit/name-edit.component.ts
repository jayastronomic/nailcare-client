import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css'],
})
export class NameEditComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToAddressEdit() {
    this.router.navigate(['../addressEdit'], { relativeTo: this.route });
  }
}
