import { Component, EventEmitter, Input, Output } from '@angular/core';
import Claim from 'src/app/interfaces/Claim';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-new-claim-form',
  templateUrl: './new-claim-form.component.html',
  styleUrls: ['./new-claim-form.component.css'],
})
export class NewClaimFormComponent {
  @Input() isOpen!: boolean;
  @Output() childEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() claimCreated: EventEmitter<Claim> = new EventEmitter<Claim>();

  private affectedNails: string[] = [];
  public newClaim: Claim = {
    claimDate: '',
    description: '',
    affectedNails: '',
    claimAmount: 0,
  };

  constructor(private dashboardService: DashboardService) {}

  callToggleForm() {
    this.childEvent.emit();
  }

  addFinger(finger: string) {
    if (!this.affectedNails.includes(finger)) {
      this.affectedNails.push(finger);
    } else {
      this.affectedNails = this.affectedNails.filter((nail) => nail !== finger);
    }
    this.newClaim.affectedNails = this.affectedNails.join(',');
  }

  handleSubmit() {
    this.dashboardService.createClaim(this.newClaim).subscribe({
      next: ({ data }) => {
        this.claimCreated.emit(data);
      },
    });
    this.callToggleForm();
  }
}
