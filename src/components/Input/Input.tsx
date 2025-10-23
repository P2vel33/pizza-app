import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, ...props }, ref) {
	return <input ref={ref} className={cn(styles['input'], { [styles['invalid']]: isValid })} {...props}></input>;
});

export default Input;
