import React, { Component } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

import { colors, globalStyles } from '../../config/globalStyles';
import constants from '../../config/constants';

import LegalScreen from './LegalScreen';
import LicenseScreen from './LicenseScreen';

const LEGAL_TAB_WIDTH = 34;
const LICENSES_TAB_WIDTH = 56;
const ALL_TABS_WIDTH = LEGAL_TAB_WIDTH + LICENSES_TAB_WIDTH;
const TOTAL_NUMBER_OF_TABS = 2;
const TOTAL_WIDTH = Dimensions.get('window').width;
const TAB_GAP_WIDTH = (TOTAL_WIDTH - ALL_TABS_WIDTH) / (TOTAL_NUMBER_OF_TABS + 1);

class TermsAndConditionsScreen extends Component {
  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content');
  }

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => (
          <TabBar
            underlineColor={colors.modalNavigationHeaderTabUnderline}
            tabBarStyle={globalStyles.modalNavigationHeaderTabBar}
            tabBarTextStyle={[
              globalStyles.modalNavigationHeaderTabLabel,
              { color: colors.modalNavigationHeaderTabInactive }
            ]}
            activeTabTextStyle={[
              globalStyles.modalNavigationHeaderTabLabel,
              { color: colors.modalNavigationHeaderTabActive }
            ]}
            underlineHeight={constants.modalNavigationTabBarUnderlineHeight}
            tabMargin={TAB_GAP_WIDTH}
          />
        )}
      >
        <LegalScreen tabLabel={{ label: 'Legal' }} />
        <LicenseScreen tabLabel={{ label: 'Licenses' }} />
      </ScrollableTabView>
    );
  }
}

TermsAndConditionsScreen.propTypes = {
  navigation: PropTypes.object
};

export default TermsAndConditionsScreen;