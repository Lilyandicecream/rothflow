import { StyleSheet, View } from 'react-native';

import { Callout } from '@/components/callout';
import { FlowHeader } from '@/components/flow-header';
import { Screen } from '@/components/screen';
import { StepCard } from '@/components/step-card';
import { IRS_2026 } from '@/config/irs/2026';
import { Palette, Space, Type } from '@/constants/design';

export default function BackdoorScreen() {
  return (
    <Screen>
      <FlowHeader badge="BACKDOOR ROTH · 2026" title="Three steps. One important check." />

      <Callout tone="warning" title="Check this before you contribute">
        Do you expect any pre-tax Traditional, Rollover, SEP, or SIMPLE IRA balance on December
        31? If yes or unsure, stop here and review the pro-rata rule with a tax professional.
      </Callout>

      <View style={styles.steps}>
        <StepCard
          number="1"
          title="Open or use a Traditional IRA"
          detail="At Fidelity, confirm you have both a Traditional IRA and a Roth IRA. The accounts must belong to the same person."
          accent={Palette.coral}
        />
        <StepCard
          number="2"
          title={`Contribute up to $${IRS_2026.iraLimit.toLocaleString()}`}
          detail="Choose tax year 2026 and treat this as a nondeductible contribution. Keep it in cash while it settles to minimize taxable earnings."
          accent={Palette.coral}
        />
        <StepCard
          number="3"
          title="Convert to your Roth IRA"
          detail="Convert after the cash is available. There is no IRS-mandated waiting period. Save the confirmation and file Form 8606 at tax time."
          accent={Palette.coral}
        />
      </View>

      <Callout tone="neutral" title="Shared IRA limit">
        The ${IRS_2026.iraLimit.toLocaleString()} limit is shared across Traditional and Roth IRAs.
        It is not ${IRS_2026.iraLimit.toLocaleString()} for each account.
      </Callout>

      <Type.FinePrint style={styles.footer}>
        This checklist does not calculate taxable conversion amounts or resolve the pro-rata rule.
      </Type.FinePrint>
    </Screen>
  );
}

const styles = StyleSheet.create({
  steps: { gap: Space.md },
  footer: { textAlign: 'center' },
});
