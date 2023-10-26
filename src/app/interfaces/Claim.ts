export default interface Claim {
  id?: string;
  claimDate: string;
  description: string;
  affectedNails: string;
  status?: string;
  claimAmount: number;
  resolutionDate?: string;
  reviewDate?: string;
}
