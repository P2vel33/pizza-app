import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import cn from 'classnames';
import styles from './Menu.module.css';
import { PREFIX } from '../../helpers/API';
import type { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import MenuList from './MenuList/MenuList';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			await new Promise<void>(res => {
				setTimeout(() => {
					res();
				}, 2000);
			});
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
		} catch (error) {
			console.error(error);
			if (error instanceof AxiosError) {
				setError(error.message);
			}
			return;
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={cn(styles['head'])}>
				<Headling>Menu</Headling>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && <MenuList products={products} />}
				{isLoading && <>Загружаем продукты...</>}
			</div>
		</>
	);
}

export default Menu;
