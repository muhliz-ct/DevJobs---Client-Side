import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slice'
import companySlice from './slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import adminSlice from "./adminSlice"
import { version } from "react";

const encryptor = encryptTransform({
    secretKey: "secretkey",
    onError: (error: Error)=>{
        console.log(error);
        
    }
})



const persistConfig:any = ({
    key : 'root',
    version: 1,
    whitelist:['user','admin','company'],
    storage,
    transforms: [encryptor]  
})

const reducer = combineReducers({
    user: userSlice,
    company: companySlice,
    admin: adminSlice
    
})

const PersistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: PersistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'], 
          },
        }),

})


export type Rootstate = ReturnType <typeof reducer>;
export type Appdispatch =  typeof store.dispatch;
export default store