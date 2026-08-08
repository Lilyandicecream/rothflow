import { PropsWithChildren } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Palette, Space } from '@/constants/design';

export function Screen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: Palette.canvas, flex: 1 },
  scrollContent: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: Platform.OS === 'web' ? Space.xxl : Space.xl,
    paddingHorizontal: Space.md,
  },
  content: {
    gap: Space.lg,
    maxWidth: 720,
    paddingTop: Space.md,
    width: '100%',
  },
});
