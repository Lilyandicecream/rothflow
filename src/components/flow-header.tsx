import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Palette, Radius, Space, Type } from '@/constants/design';

type Props = { badge: string; title: string };

export function FlowHeader({ badge, title }: Props) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        onPress={() => router.back()}
        style={styles.back}>
        <Type.Heading>←</Type.Heading>
      </Pressable>
      <View style={styles.copy}>
        <Type.Overline>{badge}</Type.Overline>
        <Type.DisplaySmall>{title}</Type.DisplaySmall>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: Space.lg },
  back: {
    alignItems: 'center',
    borderColor: Palette.lineStrong,
    borderRadius: Radius.pill,
    borderWidth: 1,
    height: 46,
    justifyContent: 'center',
    width: 46,
  },
  copy: { gap: Space.sm },
});
