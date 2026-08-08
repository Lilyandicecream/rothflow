import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Palette, Radius, Space, Type } from '@/constants/design';

type Props = {
  title: string;
  children: ReactNode;
  tone: 'warning' | 'success' | 'neutral';
};

const toneColors = {
  warning: Palette.coralSoft,
  success: Palette.limeSoft,
  neutral: Palette.blueSoft,
};

export function Callout({ title, children, tone }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: toneColors[tone] }]}>
      <Type.LabelDark>{title.toUpperCase()}</Type.LabelDark>
      <Type.BodyMuted>{children}</Type.BodyMuted>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: Radius.lg, gap: Space.sm, padding: Space.md },
});
