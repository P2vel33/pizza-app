import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import Button from '../../components/Button/Button';
import { useAppDispatch, type RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Layout() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s: RootState) => s.cart.items);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	return (
		<div className={cn(styles['layout'])}>
			<div className={cn(styles['sidebar'])}>
				<div className={cn(styles['user'])}>
					<img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
					<div className={styles['name']}>{profile?.name}</div>
					<div className={styles['email']}>{profile?.email}</div>
				</div>
				<div className={cn(styles['menu'])}>
					<NavLink
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles['active']]: isActive
							})
						}
						to="/"
					>
						<img src="/menu-icon.svg" alt="Иконка меню" />
						Меню
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles['active']]: isActive
							})
						}
						to="/cart"
					>
						<img src="/cart-icon.svg" alt="Иконка корзины" />
						Корзина
					</NavLink>
					{items.reduce((acc, i) => (acc += i.count), 0)}
				</div>
				<Button className={styles['exit']} onClick={logout}>
					<img src="/exit-icon.svg" alt="Иконка выхода" />
					Выход
				</Button>
			</div>
			<div className={cn(styles['content'])}>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
