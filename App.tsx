import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AppTabs from './src/router/app_tabs'
import { AppLightTheme, AppDarkTheme } from './src/styles/themes'

const App = () => {
    const scheme = useColorScheme()

    return (
        <NavigationContainer
            theme={scheme === 'light' ? AppLightTheme : AppDarkTheme}
        >
            <AppTabs />
        </NavigationContainer>
    )
}

export default App
