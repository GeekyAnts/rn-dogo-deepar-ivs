import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-geekyants-deepar-ivs' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RnGeekyantsDeeparIvsProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnGeekyantsDeeparIvsView';

export const RnGeekyantsDeeparIvsView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnGeekyantsDeeparIvsProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
