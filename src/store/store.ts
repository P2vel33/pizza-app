import { configureStore } from '@reduxjs/toolkit';
import { JWT_PERSISTENT_STATE, userSlice } from './user.slice';
import { saveState } from './storage';
import { useDispatch } from 'react-redux';
import { cartSlice } from './cart.slice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		cart: cartSlice.reducer
	}
});

store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisaptch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDisaptch>();
