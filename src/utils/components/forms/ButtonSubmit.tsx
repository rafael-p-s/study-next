import { ButtonHTMLAttributes } from 'react';

interface IButtonSubmit extends ButtonHTMLAttributes<HTMLButtonElement> {
	name: any;
}

export const ButtonSubmit = (props: IButtonSubmit) => {
	return (
		<button
			type="submit"
			{...props}
			className={`h-11 w-full rounded-md bg-primary px-6 text-sm font-semibold text-white
				hover:opacity-90 hover:transition-opacity ${props.className}
				focus:outline-secondary`}
		>
			{props.name}
		</button>
	);
};
