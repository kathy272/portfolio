import sharp from "sharp";
import fs from "fs";
import path from "path";

const folder = "./public";


 //run node convert-images.js to convert all images in the public folder to webp format.
 //The script will skip any images that have already been converted.


async function convertImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      await convertImages(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      const output = fullPath.replace(/\.(png|jpe?g)$/i, ".webp");

      if (fs.existsSync(output)) {
        console.log(`Skipped (already exists): ${output}`);
        continue;
      }

      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`Converted: ${output}`);
    }
  }
}

convertImages(folder);