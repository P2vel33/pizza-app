import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { useState, type FormEvent } from 'react';
import type { LoginResponse } from '../../interfaces/auth.interface';

export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};

function Login() {
	const [error, setError] = useState<string | undefined | null>();
	const navigate = useNavigate();

	const submit = async (event: FormEvent) => {
		setError(null);
		event.preventDefault();
		const target = event.target as typeof event.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password
			});
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (error) {
			if (error instanceof AxiosError) {
				setError(error.response?.data.message);
			}
		}
	};

	return (
		<div className={styles['login']}>
			<Headling>Вход</Headling>
			{error && <div className={styles['error']}>{error}</div>}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input id="email" name="email" placeholder="Email" />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Ваш пароль</label>
					<Input id="password" name="password" type="password" placeholder="Пароль" />
				</div>
				<Button appearence="big">Вход</Button>
				<div className={styles['links']}>
					<div>Нет акканута?</div>
					<Link to="/auth/register">Зарегистрироваться</Link>
				</div>
			</form>
		</div>
	);
}
export default Login;
