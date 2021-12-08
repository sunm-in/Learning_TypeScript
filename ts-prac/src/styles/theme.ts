const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  status: calRem(8),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
};

const fontWeight = {
  black: 900,
  extraBold: 800,
  bold: 700,
  regular: 400,
};

const color = {
  black: '#2C2C2C',
  white: '#FDFDFD',
  yellow: '#fdcb6e',
  bgColor: '#74b9ff',
};

const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
};

const deviceSize = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const theme = {
  fontSize,
  fontWeight,
  color,
  size,
  deviceSize,
};

export default theme;
