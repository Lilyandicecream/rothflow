import { StyleSheet, View } from 'react-native';

import { Palette, Radius, Space, Type } from '@/constants/design';

type Props = { number: string; title: string; detail: string; accent: string };

export function StepCard({ number, title, detail, accent }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.number, { backgroundColor: accent }]}>
        <Type.Heading>{number}</Type.Heading>
      </View>
      <View style={styles.copy}>
        <Type.Heading>{title}</Type.Heading>
        <Type.BodyMuted>{detail}</Type.BodyMuted>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Palette.white,
    borderColor: Palette.line,
    borderRadius: Radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: Space.md,
    padding: Space.md,
  },
  number: {
    alignItems: 'center',
    borderRadius: Radius.md,
    height: 46,
    justifyContent: 'center',
    width: 46,
  },
  copy: { flex: 1, gap: Space.xs },
});
