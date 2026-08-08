import { Pressable, StyleSheet, View } from 'react-native';

import { Palette, Radius, Space, Type } from '@/constants/design';

type Props = {
  accent: 'coral' | 'lime';
  badge: string;
  title: string;
  description: string;
  meta: string;
  onPress: () => void;
};

export function FlowCard({ accent, badge, title, description, meta, onPress }: Props) {
  const accentColor = accent === 'coral' ? Palette.coral : Palette.lime;
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.cardTop}>
        <View style={[styles.badge, { backgroundColor: accentColor }]}>
          <Type.LabelDark>{badge}</Type.LabelDark>
        </View>
        <Type.Heading>↗</Type.Heading>
      </View>
      <View style={styles.copy}>
        <Type.HeadingLarge>{title}</Type.HeadingLarge>
        <Type.BodyMuted>{description}</Type.BodyMuted>
      </View>
      <Type.Overline>{meta}</Type.Overline>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Palette.white,
    borderColor: Palette.line,
    borderRadius: Radius.xl,
    borderWidth: 1,
    gap: Space.lg,
    padding: Space.lg,
  },
  cardTop: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
  badge: { borderRadius: Radius.pill, paddingHorizontal: 12, paddingVertical: 7 },
  copy: { gap: Space.sm },
  pressed: { opacity: 0.72, transform: [{ scale: 0.99 }] },
});
