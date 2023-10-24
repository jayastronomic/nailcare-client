import { Component, OnInit } from '@angular/core';
import Coverage from '../interfaces/Coverage';
import { CoverageService } from '../services/coverage/coverage.service';

@Component({
  selector: 'app-suggested-subscription',
  templateUrl: './suggested-subscription.component.html',
  styleUrls: ['./suggested-subscription.component.css'],
})
export class SuggestedSubscriptionComponent implements OnInit {
  coverages!: Coverage[];

  constructor(private coverageService: CoverageService) {}

  ngOnInit(): void {
    this.coverageService.getCoverages().subscribe(({ data }) => {
      this.coverages = data;
    });
  }
}
