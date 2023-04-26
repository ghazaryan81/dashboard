import fs from "fs";
import path, { join } from "path";
import PugPlugin from "pug-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { merge } from "webpack-merge";

import {
	loaders,
	dir,
	ext,
	minimizeOption,
	tests,
	presets,
} from "./webpack.const.babel.js";

const minimization = true;
const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";

const getBundleBy = process.argv
	.toString()
	.replaceAll("bundleBy=", "")
	.split(",");

const bundleByTmp = ["html", "pug", "react", "react-ts"];

const getFilesToArr = (dirPath, fileExt) =>
	fs.readdirSync(dirPath).filter((item) => item.endsWith(fileExt));

const getFilesToMap = (dirPath, fileExt) => {
	const fileNameMap = {};
	getFilesToArr(dirPath.abs, fileExt).forEach(
		(item) =>
			(fileNameMap[path.parse(item).name] = `./${path
				.join(dirPath.rel, item)
				.replaceAll("\\", "/")}`)
	);
	return fileNameMap;
};

class MakePath {
	constructor(
		pathTo,
		startDir = dir.in.src,
		toRoot = dir.toRoot,
		dirName = __dirname,
		join = path.join
	) {
		this.abs = join(dirName, toRoot, startDir, ...pathTo);
		this.rel = join(startDir, ...pathTo);
	}
}

class MakePathOut {
	constructor(pathTo, outDir = dir.out.assets, join = path.join) {
		this.rel = join(outDir, ...pathTo).replace(/\\/g, "/");
	}
}

const compareArr = (getBundleBy, bundleByTmp) => {
	for (let i = 0; i < getBundleBy.length; i++) {
		for (let j = 0; j < bundleByTmp.length; j++) {
			if (getBundleBy[i] === bundleByTmp[j])
				return { index: j, element: bundleByTmp[j] };
		}
	}
	return {};
};

const bundleBy = compareArr(getBundleBy, bundleByTmp).element;
const fileDisCache = isDev ? "" : "[contenthash:8]";

const paths = {
	buildPug: new MakePath([], dir.out.buildPug),
	buildHTML: new MakePath([], dir.out.buildHTML),
	buildReact: new MakePath([], dir.out.buildReact),
	buildReactTs: new MakePath([], dir.out.buildReactTs),
	publicDir: new MakePath([], dir.in.public),
	data: new MakePath([], dir.in.data),
	in: {
		src: new MakePath([]),
		scriptsHTML: new MakePath([dir.in.scripts, dir.in.scriptsHTML]),
		scriptsPug: new MakePath([dir.in.scripts, dir.in.scriptsPug]),
		scriptsReact: new MakePath([dir.in.scripts, dir.in.scriptsReact]),
		scriptsReactTs: new MakePath([dir.in.scripts, dir.in.scriptsReactTs]),
		scripts: new MakePath([dir.in.scripts]),
		styles: new MakePath([dir.in.styles]),
		icons: new MakePath([dir.in.icons]),
		pug: new MakePath([dir.in.pug]),
		htmlPage: new MakePath([dir.in.htmlPage]),
		pugPage: new MakePath([dir.in.pug, dir.in.pugPage]),
		reactPage: new MakePath([dir.in.reactPage]),
		reactTsPage: new MakePath([dir.in.reactTsPage]),
	},
	out: {
		fav: new MakePathOut([dir.out.img, dir.out.fav]),
		fonts: new MakePathOut([dir.out.fonts]),
		icons: new MakePathOut([dir.out.icons]),
		img: new MakePathOut([dir.out.img]),
		js: new MakePathOut([dir.out.js]),
		css: new MakePathOut([dir.out.css]),
		sounds: new MakePathOut([dir.out.sounds]),
		videos: new MakePathOut([dir.out.videos]),
	},
};

function webpackConfig() {
	return {
		...(() =>
			bundleBy === "html"
				? {
						entry: Object.assign({}, getFilesToMap(paths.in.scriptsHTML, ext.js)),
						output: {
							path: paths.buildHTML.abs,
							filename: `${paths.out.js.rel}/[name].${fileDisCache}.js`,
						},
				  }
				: bundleBy === "pug"
				? {
						entry: Object.assign({}, getFilesToMap(paths.in.pugPage, ext.pug)),
						output: {
							path: paths.buildPug.abs,
							filename: `[name].${fileDisCache}.html`,
						},
				  }
				: bundleBy === "react"
				? {
						entry: Object.assign({}, getFilesToMap(paths.in.scriptsReact, ext.js)),
						output: {
							path: paths.buildReact.abs,
							filename: `${paths.out.js.rel}/[name].${fileDisCache}.js`,
						},
				  }
				: bundleBy === "react-ts"
				? {
						entry: Object.assign({}, getFilesToMap(paths.in.scriptsReactTs, ext.tsx)),
						output: {
							path: paths.buildReactTs.abs,
							filename: `${paths.out.js.rel}/[name].${fileDisCache}.js`,
						},
				  }
				: {})(),

		plugins: [
			new MiniCssExtractPlugin({
				filename: `${paths.out.css.rel}/[name].${fileDisCache}.css`,
			}),
			...(() =>
				!isDev ? [new CaseSensitivePathsPlugin(), new ProgressBarPlugin()] : [])(),
			new CopyPlugin({
				patterns: [
					{
						from: `./${paths.publicDir.rel}`,
						to: "./",
						globOptions: {
							ignore: [`**/*.${ext.html}`, `**/*.${ext.htm}`],
						},
					},
				],
			}),
			...(() =>
				bundleBy === "html"
					? Object.values(
							Object.assign({}, getFilesToMap(paths.in.htmlPage, ext.html))
					  ).map(
							(item) =>
								new HtmlWebpackPlugin({
									template: item,
									filename: path.basename(item),
									// minimization
									minify: !isDev ? minimizeOption : {},
									chunks: [path.parse(item).name, "common"],
									inject: "body",
									htmlData: {
										fav: paths.out.fav.rel,
										img: paths.out.img.rel,
										css: paths.out.css.rel,
										titleTag: "Title",
										title: "title",
										description: "description",
										keywords: "keywords",
										project: "project name",
										lang: "en",
										ogLocale: "en_US",
									},
								})
					  )
					: bundleBy === "pug"
					? [
							new PugPlugin({
								pretty: true,
								js: {
									filename: `${paths.out.js.rel}/[name].${fileDisCache}.js`,
								},
								css: {
									filename: `${paths.out.css.rel}/[name].${fileDisCache}.css`,
								},
							}),
					  ]
					: bundleBy === "react"
					? Object.values(
							Object.assign({}, getFilesToMap(paths.in.reactPage, ext.html))
					  ).map(
							(item) =>
								new HtmlWebpackPlugin({
									template: item,
									filename: path.basename(item),
									// minimization
									minify: !isDev ? minimizeOption : {},
									chunks: [path.parse(item).name, "common"],
									inject: "body",
									htmlData: {
										fav: paths.out.fav.rel,
										img: paths.out.img.rel,
										css: paths.out.css.rel,
										titleTag: "Title",
										title: "title",
										description: "description",
										keywords: "keywords",
										project: "project name",
										lang: "en",
										ogLocale: "en_US",
									},
								})
					  )
					: bundleBy === "react-ts"
					? Object.values(
							Object.assign({}, getFilesToMap(paths.in.reactTsPage, ext.html))
					  ).map(
							(item) =>
								new HtmlWebpackPlugin({
									template: item,
									filename: path.basename(item),
									// minimization
									minify: !isDev ? minimizeOption : {},
									chunks: [path.parse(item).name, "common"],
									inject: "body",
									htmlData: {
										fav: paths.out.fav.rel,
										img: paths.out.img.rel,
										css: paths.out.css.rel,
										titleTag: "Title",
										title: "title",
										description: "description",
										keywords: "keywords",
										project: "project name",
										lang: "en",
										ogLocale: "en_US",
									},
								})
					  )
					: [])(),
		],
		module: {
			noParse: /jquery|lodash/,
			rules: [
				{
					test: tests.pug,
					loader: PugPlugin.loader,
					exclude: [dir.packagesRegexp],
				},
				{
					test: tests.ts,
					exclude: [dir.packagesRegexp],
					use: [
						{
							loader: loaders.babel,
						},
						{
							loader: loaders.ts,
							options: {
								transpileOnly: true,
							},
						},
					],
				},
				{
					test: tests.svg_s,
					loader: loaders.file,
					options: {
						name: `${paths.out.icons.rel}/[name].[ext]`,
					},
				},
				{
					test: tests.svg_c,
					use: [loaders.svgr],
					issuer: tests.scripts,
				},
				{
					test: tests.scripts,
					exclude: [dir.packagesRegexp],
					loader: loaders.babel,
					options: {
						presets: [presets.babel],
						sourceMap: true,
					},
				},
				(() =>
					bundleBy === "html"
						? {
								test: tests.styles,
								use: [
									// { loader: isDev ? loaders.style : MiniCssExtractPlugin.loader },
									{ loader: MiniCssExtractPlugin.loader },
									{ loader: loaders.css },
									{ loader: loaders.postcss },
									{ loader: loaders.sass },
								],
						  }
						: bundleBy === "pug"
						? {
								test: tests.styles,
								use: [
									{ loader: loaders.css },
									{ loader: loaders.postcss },
									{ loader: loaders.sass },
								],
						  }
						: {})(),

				(() =>
					bundleBy === "react" || bundleBy === "react-ts"
						? {
								test: tests.styles,
								exclude: tests.cssModules,
								use: [
									{ loader: MiniCssExtractPlugin.loader },
									{ loader: loaders.tsCss },
									{ loader: loaders.css, options: { modules: false } },
									{ loader: loaders.postcss },
									{
										loader: loaders.sass,
										options: {
											additionalData: "@use './src/styles/abstracts/index' as *;",
										},
									},
								],
						  }
						: {})(),
				(() =>
					bundleBy === "react" || bundleBy === "react-ts"
						? {
								test: tests.cssModules,
								use: [
									{ loader: MiniCssExtractPlugin.loader },
									{ loader: loaders.tsCss },
									{
										loader: loaders.css,
										options: {
											sourceMap: true,
											esModule: true,
											modules: {
												localIdentName: "[local]--[hash:base64:5]",
											},
										},
									},
									{ loader: loaders.postcss },
									{
										loader: loaders.sass,
										options: {
											additionalData: "@use './src/styles/abstracts/index' as *;",
										},
									},
								],
						  }
						: {})(),
				{
					test: tests.mediaFonts,
					type: "asset/resource",
					generator: {
						filename: `${paths.out.fonts.rel}/[name]${fileDisCache}[ext]`,
					},
				},
				{
					test: tests.mediaImages,
					type: "asset/resource",
					generator: {
						filename: `${paths.out.img.rel}/[name]${fileDisCache}[ext]`,
					},
				},
				{
					test: tests.mediaSounds,
					type: "asset/resource",
					generator: {
						filename: `${paths.out.sounds.rel}/[name]${fileDisCache}[ext]`,
					},
				},
				{
					test: tests.mediaVideos,
					type: "asset/resource",
					generator: {
						filename: `${paths.out.videos.rel}/[name]${fileDisCache}[ext]`,
					},
				},
			],
		},
		devServer: isDev
			? {
					open: true,
					hot: true,
					port: 4600,
					compress: !isDev,
					liveReload: true,
					historyApiFallback: true,
					watchFiles: {
						paths: [
							path.join(paths.in.src.abs, "/**/*"),
							paths.in.src.abs,
							paths.publicDir.abs,
							`${paths.in.src.abs}/**/*`,
						],
						options: {
							usePolling: true,
						},
					},
					client: {
						overlay: false,
					},
			  }
			: {},
		mode: NODE_ENV,
		profile: !isDev,
		stats: !isDev
			? "errors-only"
			: {
					assets: false,
					cached: false,
					cachedAssets: false,
					children: false,
					chunks: false,
					chunkModules: false,
					chunkOrigins: false,
					colors: true,
					depth: false,
					entrypoints: true,
					hash: false,
					modules: false,
					performance: true,
					reasons: false,
					source: false,
					timings: true,
					version: false,
					warnings: true,
			  },
		optimization: {
			// minimization
			// minimize: !isDev,
			minimize: false,
			minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
			...(() =>
				isDev
					? {
							runtimeChunk: true,
							removeAvailableModules: false,
							removeEmptyChunks: false,
							splitChunks: {
								chunks: "all",
								maxInitialRequests: Infinity,
								minSize: 0,
							},
							// splitChunks: false,
					  }
					: {})(),
		},
		target: "web",
		name: `webpack builder ${NODE_ENV}`,
		devtool: isDev ? "source-map" : "source-map",
		cache: isDev ? { type: "memory", cacheUnaffected: true } : false,
		cache: false,
		watchOptions: {
			aggregateTimeout: 5,
			ignored: [dir.packages],
		},
		resolve: {
			extensions: Object.values(ext).map((item) => `.${item}`),
			alias: {
				"~pug": paths.in.pug.abs,
				"~styles": paths.in.styles.abs,
				"~scripts": paths.in.scripts.abs,
				"~public": paths.publicDir.abs,
				"~icons": paths.in.icons.abs,
				"~data": paths.data.abs,
			},
		},
	};
}

export default webpackConfig;
