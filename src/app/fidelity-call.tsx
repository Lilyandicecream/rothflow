import { Linking, StyleSheet, View } from 'react-native';

import { ActionButton } from '@/components/action-button';
import { Callout } from '@/components/callout';
import { FlowHeader } from '@/components/flow-header';
import { Screen } from '@/components/screen';
import { Palette, Radius, Space, Type } from '@/constants/design';

const script = `Hi, I'm an active employee participating in a workplace 401(k) plan. I've elected after-tax contributions in the plan.

Does the plan allow automatic Roth in-plan conversion of every future after-tax contribution? If it does, please enable it for me.

If automatic conversion isn't available, how frequently can I make an in-plan conversion, and does the plan allow an in-service rollover of the after-tax source to a Roth IRA?`;

export default function FidelityCallScreen() {
  return (
    <Screen>
      <FlowHeader badge="FIDELITY CALL GUIDE" title="Call once. Know what to say." />

      <Callout tone="warning" title="Use the right phrase">
        Say “after-tax contribution.” This is not the same as an ordinary Roth 401(k) employee
        contribution.
      </Callout>

      <View style={styles.scriptCard}>
        <Type.Overline>READ THIS TO THE REPRESENTATIVE</Type.Overline>
        <Type.Body style={styles.script}>{script}</Type.Body>
      </View>

      <ActionButton
        label="Call Fidelity NetBenefits"
        onPress={() => Linking.openURL('tel:18008355098')}
      />

      <View style={styles.checklist}>
        <Type.Heading>Before you hang up</Type.Heading>
        {[
          'Is automatic conversion now enabled?',
          'When will the first conversion happen?',
          'How will it appear in NetBenefits?',
          'Are there conversion or withdrawal limits?',
        ].map((item) => (
          <View key={item} style={styles.checkRow}>
            <View style={styles.check} />
            <Type.BodyMuted style={styles.checkText}>{item}</Type.BodyMuted>
          </View>
        ))}
      </View>

      <Type.FinePrint style={styles.footer}>
        Phone numbers and plan features can change. Confirm the current number shown inside your
        NetBenefits account before calling.
      </Type.FinePrint>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scriptCard: {
    backgroundColor: Palette.white,
    borderColor: Palette.line,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Space.md,
    padding: Space.lg,
  },
  script: { lineHeight: 27 },
  checklist: { gap: Space.md, paddingVertical: Space.md },
  checkRow: { alignItems: 'center', flexDirection: 'row', gap: Space.md },
  check: {
    borderColor: Palette.ink,
    borderRadius: 6,
    borderWidth: 2,
    height: 22,
    width: 22,
  },
  checkText: { flex: 1 },
  footer: { textAlign: 'center' },
});
