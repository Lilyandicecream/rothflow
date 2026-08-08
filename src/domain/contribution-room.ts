import { IRS_2026 } from '@/config/irs/2026';

export type ContributionRoomInput = {
  employeeDeferrals: number;
  employerContributions: number;
  afterTaxContributions: number;
  remainingGrossPay: number;
};

export type ContributionRoomResult = {
  totalAnnualAdditions: number;
  remainingRoom: number;
  recommendedPercent: number | null;
  isOverLimit: boolean;
};

function nonNegative(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function parseMoney(value: string) {
  return nonNegative(Number(value.replace(/[$,\s]/g, '')));
}

export function calculateContributionRoom(
  input: ContributionRoomInput,
): ContributionRoomResult {
  const employeeDeferrals = nonNegative(input.employeeDeferrals);
  const employerContributions = nonNegative(input.employerContributions);
  const afterTaxContributions = nonNegative(input.afterTaxContributions);
  const remainingGrossPay = nonNegative(input.remainingGrossPay);

  const totalAnnualAdditions = employeeDeferrals + employerContributions + afterTaxContributions;
  const remainingRoom = IRS_2026.definedContributionLimit - totalAnnualAdditions;
  const recommendedPercent =
    remainingGrossPay > 0 && remainingRoom > 0
      ? Math.min(100, (remainingRoom / remainingGrossPay) * 100)
      : null;

  return {
    totalAnnualAdditions,
    remainingRoom,
    recommendedPercent,
    isOverLimit: remainingRoom < 0,
  };
}
