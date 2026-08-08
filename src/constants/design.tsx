import { PropsWithChildren } from 'react';
import { Platform, StyleSheet, Text, TextProps, View } from 'react-native';

export const Palette = {
  canvas: '#F4F1EA',
  white: '#FFFEFA',
  ink: '#17221F',
  inkMuted: '#56625E',
  inkFaint: '#929B97',
  coral: '#FF6A4D',
  coralSoft: '#FFE1D8',
  lime: '#C8F06B',
  limeSoft: '#E8F8BD',
  blueSoft: '#DCEBF3',
  line: '#DDD9D0',
  lineStrong: '#B9B7AF',
} as const;

export const Space = { xs: 6, sm: 10, md: 16, lg: 24, xl: 36, xxl: 52 } as const;
export const Radius = { md: 12, lg: 18, xl: 26, pill: 999 } as const;

const fontFamily = Platform.select({ ios: 'Avenir Next', web: 'Inter, system-ui, sans-serif' });

function StyledText({ style, ...props }: TextProps) {
  return <Text {...props} style={[{ color: Palette.ink, fontFamily }, style]} />;
}

export const Type = {
  Display: (props: TextProps) => <StyledText {...props} style={[styles.display, props.style]} />,
  DisplaySmall: (props: TextProps) => (
    <StyledText {...props} style={[styles.displaySmall, props.style]} />
  ),
  HeadingLarge: (props: TextProps) => (
    <StyledText {...props} style={[styles.headingLarge, props.style]} />
  ),
  Heading: (props: TextProps) => <StyledText {...props} style={[styles.heading, props.style]} />,
  Body: (props: TextProps) => <StyledText {...props} style={[styles.body, props.style]} />,
  BodyMuted: (props: TextProps) => (
    <StyledText {...props} style={[styles.body, styles.muted, props.style]} />
  ),
  Label: (props: TextProps) => <StyledText {...props} style={[styles.labelLight, props.style]} />,
  LabelDark: (props: TextProps) => <StyledText {...props} style={[styles.label, props.style]} />,
  Overline: (props: TextProps) => <StyledText {...props} style={[styles.overline, props.style]} />,
  FinePrint: (props: TextProps) => (
    <StyledText {...props} style={[styles.finePrint, props.style]} />
  ),
  Button: (props: TextProps) => <StyledText {...props} style={[styles.button, props.style]} />,
};

export function Brand({ children }: PropsWithChildren) {
  return (
    <View style={styles.brand}>
      <View style={styles.brandMark}>
        <StyledText style={styles.brandArrow}>↗</StyledText>
      </View>
      <StyledText style={styles.brandText}>{children ?? 'RothFlow'}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  display: { fontSize: 50, fontWeight: '800', letterSpacing: -2.2, lineHeight: 53 },
  displaySmall: { fontSize: 34, fontWeight: '800', letterSpacing: -1.3, lineHeight: 39 },
  headingLarge: { fontSize: 28, fontWeight: '800', letterSpacing: -0.7, lineHeight: 34 },
  heading: { fontSize: 20, fontWeight: '700', letterSpacing: -0.25, lineHeight: 26 },
  body: { fontSize: 16, fontWeight: '500', lineHeight: 24 },
  muted: { color: Palette.inkMuted },
  label: { fontSize: 11, fontWeight: '800', letterSpacing: 1.2, lineHeight: 15 },
  labelLight: {
    color: Palette.white,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    lineHeight: 15,
  },
  overline: { color: Palette.inkMuted, fontSize: 12, fontWeight: '800', letterSpacing: 1.1 },
  finePrint: { color: Palette.inkMuted, fontSize: 12, fontWeight: '500', lineHeight: 18 },
  button: { color: Palette.ink, fontSize: 16, fontWeight: '800' },
  brand: { alignItems: 'center', flexDirection: 'row', gap: 10 },
  brandMark: {
    alignItems: 'center',
    backgroundColor: Palette.lime,
    borderRadius: 10,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  brandArrow: { fontSize: 18, fontWeight: '900' },
  brandText: { fontSize: 19, fontWeight: '800', letterSpacing: -0.5 },
});
