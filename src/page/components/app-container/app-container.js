import React from 'react';

import apps from 'constants/apps';
import getApp from 'util/getApp';

export default class AppContainer extends React.Component {
  render() {

    const appViews = null; //getApp(appList, this.props.changeScreen, true);

    return (
      <div class='app-container'>
          {appViews} 
      </div>
    );
  }
}
