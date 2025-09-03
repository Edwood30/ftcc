import App from '../App'
import HomePage from '../screens/HomePage'
import DivisionsPage from '../screens/DivisionsPage'
import ContactPage from '../screens/ContactPage'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'divisions', element: <DivisionsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]


