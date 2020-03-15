declare module "*.ico"
declare module "*.png"
declare module "*.svg"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.webp"
declare module "*.eot"
declare module "*.otf"
declare module "*.ttf"
declare module "*.woff"
declare module "*.woff2"
declare module "*.txt"
declare module "*.html"
declare module "!!raw-loader!*" {
	const contents: string;
	export default contents;
}
