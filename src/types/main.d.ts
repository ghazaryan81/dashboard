declare module "*.css" {
	// const classes: { [key: string]: string };
	const classes: any;
	export default classes;
}

// declare module "*.scss" {
// 	// const classes: { [key: string]: string };
// 	const classes: { any: any };
// 	export default classes;
// }

/* declare module "*.scss" {
	const content: Record<string, string>;
	export default content;
} */

declare module "*.scss" {
	const styles: any;
	export default styles;
}

declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.sass" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.less" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.styl" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.s.svg" {
	import { ReactElement, SVGProps } from "react";
	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}

declare module "*.c.svg" {
	import { FC } from "react";
	const ReactComponent: FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
	export default ReactComponent;
}

declare module "*.json" {
	const dataValue: Record<string, any>;
	export default dataValue;
}

declare module "*.jpg" {
	const path: string;
	export default path;
}

declare module "*.jpeg" {
	const path: string;
	export default path;
}

declare module "*.png" {
	const path: string;
	export default path;
}

declare module "*.apng" {
	const path: string;
	export default path;
}

declare module "*.webp" {
	const path: string;
	export default path;
}

declare module "*.avif" {
	const path: string;
	export default path;
}

declare module "*.ico" {
	const path: string;
	export default path;
}

declare module "*.gif" {
	const path: string;
	export default path;
}

declare module "*.bmp" {
	const path: string;
	export default path;
}

declare module "*.tiff" {
	const path: string;
	export default path;
}

declare module "*.mp4" {
	const path: string;
	export default path;
}

declare module "*.webm" {
	const path: string;
	export default path;
}

declare module "*.avi" {
	const path: string;
	export default path;
}

declare module "*.f.svg" {
	const path: string;
	export default path;
}

declare module "*.woff2" {
	const path: string;
	export default path;
}

declare module "*.woff" {
	const path: string;
	export default path;
}

declare module "*.otf" {
	const path: string;
	export default path;
}

declare module "*.ttf" {
	const path: string;
	export default path;
}

declare module "*.eot" {
	const path: string;
	export default path;
}
