import { NavigationContainer } from '@react-navigation/native'

import AppTabs from './src/router/app_tabs'

const App = () => {
    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    )
}

export default App
