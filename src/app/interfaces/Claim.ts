export default interface Claim {
  id?: string;
  claimDate: string;
  description: string;
  affectedNails: string;
  claimStatus?: string;
  claimAmount: number;
  resolutionDate?: string;
  reviewDate?: string;
}
