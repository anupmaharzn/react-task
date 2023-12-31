import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'antd/dist/reset.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
)
