import App from './App'
import HomePage from './pages/HomePage'

export default [
    {
        ...App,
        routes: [
            {
                component: HomePage,
                path: '/',
                exact: true   
            }
        ]
    }
]
