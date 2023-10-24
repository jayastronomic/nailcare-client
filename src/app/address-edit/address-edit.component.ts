import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css'],
})
export class AddressEditComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToNailDetails() {
    this.router.navigate(['../nailDetails'], { relativeTo: this.route });
  }
}
