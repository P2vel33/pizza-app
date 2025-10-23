import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import cn from 'classnames';
import styles from './Menu.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';

function Menu() {
	return (
		<>
			<div className={cn(styles['head'])}>
				<Headling>Menu</Headling>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div>
				<ProductCard
					id={1}
					title="Наслаждение"
					description="Салями, руккола, помидоры, оливки"
					rating={4.5}
					price={300}
					image="/product-demo.png"
				/>
			</div>
		</>
	);
}

export default Menu;
