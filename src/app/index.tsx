import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ActionButton } from '@/components/action-button';
import { FlowCard } from '@/components/flow-card';
import { Screen } from '@/components/screen';
import { Brand, Palette, Radius, Space, Type } from '@/constants/design';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.topBar}>
        <Brand />
        <View style={styles.yearPill}>
          <Type.Label>2026 RULES</Type.Label>
        </View>
      </View>

      <View style={styles.hero}>
        <View style={styles.eyebrow}>
          <View style={styles.dot} />
          <Type.LabelDark>A THREE-STEP RETIREMENT GUIDE</Type.LabelDark>
        </View>
        <Type.Display>Put more money in Roth.</Type.Display>
        <Type.BodyMuted style={styles.heroCopy}>
          Skip the tax jargon. Answer a few questions, follow three steps, and know exactly what
          to do next.
        </Type.BodyMuted>
      </View>

      <View style={styles.flowGrid}>
        <FlowCard
          accent="coral"
          badge="IRA"
          title="Backdoor Roth"
          description="A clean three-step path from Traditional IRA to Roth IRA."
          meta="$7,500 IRA limit · 2026"
          onPress={() => router.push('/backdoor')}
        />
        <FlowCard
          accent="lime"
          badge="401(k)"
          title="Mega Backdoor"
          description="A workplace-plan workflow, starting with the 6 + 10 cash-flow trial."
          meta="$72,000 total limit · 2026"
          onPress={() => router.push('/mega-backdoor')}
        />
      </View>

      <View style={styles.quickStart}>
        <View style={styles.quickStartCopy}>
          <Type.Overline>NOT SURE WHERE TO START?</Type.Overline>
          <Type.Heading>The 6 + 10 Starter Plan</Type.Heading>
          <Type.BodyMuted>
            First preserve your full employer match, try 10% after-tax, then adjust after your next
            paycheck.
          </Type.BodyMuted>
        </View>
        <ActionButton label="Show me the plan" onPress={() => router.push('/mega-backdoor')} />
      </View>

      <Type.FinePrint style={styles.disclaimer}>
        Educational guidance only. Not affiliated with Fidelity or any employer. Not tax, legal,
        or investment advice.
      </Type.FinePrint>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yearPill: {
    backgroundColor: Palette.ink,
    borderRadius: Radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  hero: {
    gap: Space.md,
    paddingBottom: Space.md,
    paddingTop: Space.xxl,
  },
  eyebrow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Space.sm,
  },
  dot: {
    backgroundColor: Palette.coral,
    borderRadius: 5,
    height: 10,
    width: 10,
  },
  heroCopy: {
    maxWidth: 620,
  },
  flowGrid: {
    gap: Space.md,
  },
  quickStart: {
    backgroundColor: Palette.ink,
    borderRadius: Radius.xl,
    gap: Space.lg,
    marginTop: Space.md,
    overflow: 'hidden',
    padding: Space.lg,
  },
  quickStartCopy: {
    gap: Space.sm,
  },
  disclaimer: {
    marginTop: Space.sm,
    textAlign: 'center',
  },
});
