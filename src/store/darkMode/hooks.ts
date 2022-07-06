import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { appDispatch, rootState } from './store';

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
