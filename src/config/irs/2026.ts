export const IRS_2026 = {
  taxYear: 2026,
  iraLimit: 7_500,
  iraCatchUp50Plus: 1_100,
  employeeDeferralLimit: 24_500,
  catchUp50Plus: 8_000,
  catchUpAge60To63: 11_250,
  definedContributionLimit: 72_000,
  annualCompensationLimit: 360_000,
  rothIraPhaseOut: {
    single: { startsAt: 153_000, endsAt: 168_000 },
    marriedFilingJointly: { startsAt: 242_000, endsAt: 252_000 },
    marriedFilingSeparately: { startsAt: 0, endsAt: 10_000 },
  },
  source: 'IRS Notice 2025-67',
  sourceUrl: 'https://www.irs.gov/pub/irs-drop/n-25-67.pdf',
} as const;
