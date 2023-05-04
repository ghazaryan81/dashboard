import imagemin from "imagemin";
import imageminAvif from "imagemin-avif";

(async () => {
	await imagemin(["./public/assets/img/*.{jpg,png}"], {
		destination: "./public/assets/img/",
		plugins: [imageminAvif({ quality: 85 })],
	});
	console.log("Images optimized");
})();
