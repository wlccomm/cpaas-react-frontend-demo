import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  console.log(window.location.hostname)
  console.log(window.location.protocol)
  const authStore = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider store={authStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
