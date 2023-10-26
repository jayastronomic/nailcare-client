import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/interfaces/Claim';

@Component({
  selector: 'claims-container',
  templateUrl: './claims-container.component.html',
  styleUrls: ['./claims-container.component.css'],
})
export class ClaimsContainerComponent implements OnInit {
  claims: Claim[] = [];

  ngOnInit(): void {
    console.log(this.claims);
  }
}
