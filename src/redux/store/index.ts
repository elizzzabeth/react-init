import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootSaga from "src/redux/sagas";
import rootReducer, { RootReducer } from "src/redux/reducers";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  blacklist: ["errors"],
  stateReconciler: autoMergeLevel2,
  storage
};

const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
