import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ActionButton } from '@/components/action-button';
import { Callout } from '@/components/callout';
import { FlowHeader } from '@/components/flow-header';
import { Screen } from '@/components/screen';
import { StepCard } from '@/components/step-card';
import { IRS_2026 } from '@/config/irs/2026';
import { WORKPLACE_PLAN } from '@/config/plan/workplace-plan';
import { Palette, Radius, Space, Type } from '@/constants/design';

export default function MegaBackdoorScreen() {
  const router = useRouter();

  return (
    <Screen>
      <FlowHeader badge="401(k) · STARTER MODE" title="Try 6 + 10, then tune it." />

      <View style={styles.formulaCard}>
        <View style={styles.formulaItem}>
          <Type.DisplaySmall>6%</Type.DisplaySmall>
          <Type.BodyMuted>regular 401(k)</Type.BodyMuted>
          <Type.FinePrint>Example only—use the rate required for your full match</Type.FinePrint>
        </View>
        <Type.DisplaySmall style={styles.plus}>+</Type.DisplaySmall>
        <View style={styles.formulaItem}>
          <Type.DisplaySmall>10%</Type.DisplaySmall>
          <Type.BodyMuted>after-tax 401(k)</Type.BodyMuted>
          <Type.FinePrint>A starter setting—not your personalized maximum</Type.FinePrint>
        </View>
      </View>

      <View style={styles.steps}>
        <StepCard
          number="1"
          title="Set regular 401(k) to at least 6%"
          detail="Enter the contribution rate required to receive your full employer match. Choose pretax or Roth based on your situation, and verify the formula in your current plan documents."
          accent={Palette.lime}
        />
        <StepCard
          number="2"
          title="Add 10% after-tax"
          detail="Use this as a cash-flow trial for one or two paychecks. It is separate from ordinary Roth 401(k) contributions."
          accent={Palette.lime}
        />
        <StepCard
          number="3"
          title="Turn on Roth conversion"
          detail="Ask your plan administrator to automatically convert future after-tax contributions to the Roth portion of the plan. Confirm it on your next statement."
          accent={Palette.lime}
        />
      </View>

      <Callout tone="success" title="After your next paycheck">
        Comfortable? Keep 10% or calculate a higher target. Too tight? Lower only the after-tax
        percentage first, while preserving the contribution needed for the match.
      </Callout>

      <View style={styles.actions}>
        <ActionButton
          label="Calculate my 2026 room"
          onPress={() => router.push('/calculator')}
        />
        <ActionButton
          label="What to say to Fidelity"
          variant="secondary"
          onPress={() => router.push('/fidelity-call')}
        />
      </View>

      <Type.FinePrint style={styles.footer}>
        ${IRS_2026.definedContributionLimit.toLocaleString()} is the 2026 §415(c) total limit before
        age-based catch-up contributions. Current workplace-plan terms must be confirmed with your
        plan administrator. The {WORKPLACE_PLAN.starterPreset.regular401kPercent}% +{' '}
        {WORKPLACE_PLAN.starterPreset.afterTaxPercent}% preset is a cash-flow trial, not a universal
        recommendation.
      </Type.FinePrint>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formulaCard: {
    alignItems: 'center',
    backgroundColor: Palette.limeSoft,
    borderRadius: Radius.xl,
    flexDirection: 'row',
    gap: Space.md,
    justifyContent: 'center',
    padding: Space.lg,
  },
  formulaItem: { flex: 1, gap: 2 },
  plus: { color: Palette.inkMuted },
  steps: { gap: Space.md },
  actions: { gap: Space.sm },
  footer: { textAlign: 'center' },
});
