import { useMemo, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from 'react-native';

import { Callout } from '@/components/callout';
import { FlowHeader } from '@/components/flow-header';
import { Screen } from '@/components/screen';
import { IRS_2026 } from '@/config/irs/2026';
import { Palette, Radius, Space, Type } from '@/constants/design';
import { calculateContributionRoom, parseMoney } from '@/domain/contribution-room';

type FieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  hint?: string;
};

function MoneyField({ label, value, onChangeText, hint }: FieldProps) {
  return (
    <View style={styles.field}>
      <Type.LabelDark>{label}</Type.LabelDark>
      <View style={styles.inputWrap}>
        <Type.Heading style={styles.dollar}>$</Type.Heading>
        <TextInput
          accessibilityLabel={label}
          keyboardType="numeric"
          onChangeText={onChangeText}
          placeholder="0"
          placeholderTextColor={Palette.inkFaint}
          style={styles.input}
          value={value}
        />
      </View>
      {hint ? <Type.FinePrint>{hint}</Type.FinePrint> : null}
    </View>
  );
}

export default function CalculatorScreen() {
  const [regular, setRegular] = useState('0');
  const [employer, setEmployer] = useState('0');
  const [afterTax, setAfterTax] = useState('0');
  const [remainingGrossPay, setRemainingGrossPay] = useState('0');

  const result = useMemo(
    () =>
      calculateContributionRoom({
        employeeDeferrals: parseMoney(regular),
        employerContributions: parseMoney(employer),
        afterTaxContributions: parseMoney(afterTax),
        remainingGrossPay: parseMoney(remainingGrossPay),
      }),
    [afterTax, employer, regular, remainingGrossPay],
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
      <Screen>
        <FlowHeader badge="2026 ESTIMATOR" title="How much room is left?" />

        <Callout tone="neutral" title="Use year-to-date numbers">
          Find employee and employer totals on NetBenefits or your latest statement. Do not enter
          percentages here.
        </Callout>

        <View style={styles.form}>
          <MoneyField
            label="PRETAX + ROTH 401(k) CONTRIBUTED"
            value={regular}
            onChangeText={setRegular}
            hint={`Employee deferral limit: $${IRS_2026.employeeDeferralLimit.toLocaleString()}`}
          />
          <MoneyField
            label="EMPLOYER CONTRIBUTIONS / MATCH"
            value={employer}
            onChangeText={setEmployer}
          />
          <MoneyField
            label="AFTER-TAX CONTRIBUTED"
            value={afterTax}
            onChangeText={setAfterTax}
          />
          <MoneyField
            label="GROSS PAY STILL EXPECTED THIS YEAR"
            value={remainingGrossPay}
            onChangeText={setRemainingGrossPay}
            hint="Used only to estimate a remaining after-tax payroll percentage"
          />
        </View>

        <View style={[styles.result, result.isOverLimit && styles.resultWarning]}>
          <Type.Overline>
            {result.isOverLimit ? 'PROJECTED OVERAGE' : 'ESTIMATED AFTER-TAX ROOM'}
          </Type.Overline>
          <Type.DisplaySmall>
            ${Math.abs(result.remainingRoom).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </Type.DisplaySmall>
          {result.recommendedPercent !== null ? (
            <Type.BodyMuted>
              About {result.recommendedPercent.toFixed(1)}% of your remaining gross pay
            </Type.BodyMuted>
          ) : (
            <Type.BodyMuted>Add remaining gross pay to estimate a payroll percentage.</Type.BodyMuted>
          )}
        </View>

        <Type.FinePrint style={styles.footer}>
          Estimate only. Payroll timing, bonuses, refunds, plan testing, true-ups, compensation
          definitions, and other employer contributions can change the final amount.
        </Type.FinePrint>
      </Screen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  form: {
    backgroundColor: Palette.white,
    borderColor: Palette.line,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Space.lg,
    padding: Space.lg,
  },
  field: { gap: Space.xs },
  inputWrap: {
    alignItems: 'center',
    borderBottomColor: Palette.lineStrong,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  dollar: { color: Palette.inkMuted },
  input: {
    color: Palette.ink,
    flex: 1,
    fontSize: 28,
    fontWeight: '700',
    paddingHorizontal: Space.sm,
    paddingVertical: 10,
  },
  result: {
    backgroundColor: Palette.limeSoft,
    borderRadius: Radius.xl,
    gap: Space.xs,
    padding: Space.lg,
  },
  resultWarning: { backgroundColor: Palette.coralSoft },
  footer: { textAlign: 'center' },
});
