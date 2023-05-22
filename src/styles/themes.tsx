import { DarkTheme } from '@react-navigation/native'
import type { Theme } from '@react-navigation/native'

export const AppLightTheme: Theme = {
    dark: false,
    colors: {
        primary: '#FB0201',
        background: '#FFFFFF',
        card: '#F8F8F8',
        text: '#000000',
        border: '#F0F0F0',
        notification: '#FD5E5E'
    }
}

export const AppDarkTheme: Theme = {
    dark: true,
    colors: {
        primary: '#9933FF',
        background: '#000023',
        card: '#000028',
        text: '#FFFFFF',
        border: '#000028',
        notification: '#9933FF'
    }
}
