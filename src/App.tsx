import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import i18n from "./services/translations/i18n";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { Loader } from "src/components";
import { store } from "src/redux/store";
import AppRouter from "src/router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={<Loader />}>
            <AppRouter />
          </Suspense>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
