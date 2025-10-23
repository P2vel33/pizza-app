import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';

const Input = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, ...props }, ref) {
	return (
		<div className={cn(styles['input-wrapper'])}>
			<input ref={ref} className={cn(styles['input'], { [styles['invalid']]: isValid })} {...props} />
			<img className={styles['icon']} src="/search-icon.svg" alt="Иконка лупы" />
		</div>
	);
});

export default Input;
