export const WORKPLACE_PLAN = {
  recordkeeperExample: 'Fidelity NetBenefits',
  afterTaxContributionsRequireConfirmation: true,
  rothInPlanConversionRequiresConfirmation: true,
  inServiceRolloverRequiresConfirmation: true,
  starterPreset: { regular401kPercent: 6, afterTaxPercent: 10 },
  disclaimer:
    'Your current Summary Plan Description and plan account control if they conflict with this example.',
} as const;
