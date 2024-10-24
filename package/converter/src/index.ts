
import { svgToComponentDir } from "./lib/convert";
import { join } from "path";

/** The source folder */
const source = join(import.meta.dirname, "../svg");

/** The destination folder */
const dest = join(import.meta.dirname, "../../component/src/lib");

await svgToComponentDir(source, dest, "unknown");
console.log("Completed");