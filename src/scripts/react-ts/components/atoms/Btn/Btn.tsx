import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Btn.module.scss";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export const Btn: FC<BtnProps> = ({ children, ...props }) => (
	<button {...props} className={classNames({ [styles.cbtn]: true })}>
		{children}
	</button>
);
