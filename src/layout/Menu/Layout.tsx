import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import Button from '../../components/Button/Button';

function Layout() {
	return (
		<div className={cn(styles['layout'])}>
			<div className={cn(styles['sidebar'])}>
				<div className={cn(styles['user'])}>
					<img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
					<div className={styles['name']}>User</div>
					<div className={styles['email']}>User@mail.user</div>
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
				</div>
				<Button className={styles['exit']}>
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
