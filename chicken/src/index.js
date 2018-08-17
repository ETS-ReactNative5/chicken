import Amplify from 'aws-amplify';
import EStyleSheet from 'react-native-extended-stylesheet';

import awsExports from './aws-exports';
import RootNavigator from './config/routes/RootNavigator';

Amplify.configure(awsExports);

// Need the build call so the rest of the EStyleSheet references all work
EStyleSheet.build({
  // $outline: 1
});

export default RootNavigator;
