import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00536D'
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}
    />
  )
}

export default Layout
