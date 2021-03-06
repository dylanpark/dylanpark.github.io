import React from 'react';

import apps from 'constants/apps';
import getApp from 'util/getApp';

export default class DockContainer extends React.Component {
  render() {
    const appViews = getApp(apps.dockList, this.props.changeScreen);
    return (
      <div class='dock-container'>
        <div class='dock-container-inner'>
          {appViews}
        </div>
      </div>
    );
  }
}
