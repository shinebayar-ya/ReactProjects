import React, { useState, useEffect, Component } from "react";
import { Platform, View } from 'react-native'
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { Focus } from './src/features/focus/Focus'
import { FocusHistory } from './src/features/focus/FocusHistory'
import { Timer } from './src/features/timer/Timer'
import { colors } from './src/utils/colors'
import { sizes } from './src/utils/sizes'

const STATUSES = {
  COMPLETE : 0,
  CANCELLED : 1
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? sizes.md : sizes.lg,
    backgroundColor: colors.darkBlue,
  },
})
class App extends Component {

  const [focusSubject, setFocustSubject] = useState(NULL);
  const [FocusHistory, setFocustHistory] = useState([]);
  
  render() {
    return (
      <View style={}>

      </View>
    )
  }
}

export default App