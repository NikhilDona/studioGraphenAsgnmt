import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 770;

const vw = (size) => (width / guidelineBaseWidth) * size;
const vh = (size) => (height / guidelineBaseHeight) * size;
const ms = (size, factor = 0.5) => size + (vw(size) - size) * factor;

export { vw, vh, ms };