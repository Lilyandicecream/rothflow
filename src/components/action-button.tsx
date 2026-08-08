import { Pressable, StyleSheet } from 'react-native';

import { Palette, Radius, Space, Type } from '@/constants/design';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export function ActionButton({ label, onPress, variant = 'primary' }: Props) {
  const secondary = variant === 'secondary';
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary && styles.secondary,
        pressed && styles.pressed,
      ]}>
      <Type.Button style={secondary ? styles.secondaryText : undefined}>{label}</Type.Button>
      <Type.Button style={secondary ? styles.secondaryText : undefined}>→</Type.Button>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Palette.coral,
    borderColor: Palette.coral,
    borderRadius: Radius.pill,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 56,
    paddingHorizontal: Space.lg,
  },
  secondary: { backgroundColor: 'transparent', borderColor: Palette.ink },
  secondaryText: { color: Palette.ink },
  pressed: { opacity: 0.76, transform: [{ scale: 0.99 }] },
});
