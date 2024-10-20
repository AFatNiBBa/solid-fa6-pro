
import { Icon } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=sharp-thin planet-moon}
 * @preview ![planet-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/planet-moon.svg)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM512 0a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM224 496c114.9 0 208-93.1 208-208c0-98.5-68.4-180.9-160.3-202.5l8.2 57.4 .5 3.6-2.4 2.8L186.9 255.6 211.3 280 320 280l8 0 0 8 0 64 0 2-1 1.8-56 104-2.3 4.2-4.8 0-40 0-8 0 0-8 0-64-24 0-8 0 0-8 0-60.7L124.7 264 64 264l-3.3 0-2.3-2.3L24.8 228.1c-5.7 19-8.8 39.1-8.8 59.9c0 114.9 93.1 208 208 208zM30.6 211.3L67.3 248l60.7 0 3.3 0 2.3 2.3 64 64 2.3 2.3 0 3.3 0 56 24 0 8 0 0 8 0 64 27.2 0L312 350l0-54-104 0-3.3 0-2.3-2.3-32-32-5.2-5.2 4.8-5.6 93.6-109.2-8.5-59.2C245 80.8 234.6 80 224 80C136.2 80 61.1 134.4 30.6 211.3zM269.3 68.6C371.3 89.5 448 179.8 448 288c0 123.7-100.3 224-224 224S0 411.7 0 288S100.3 64 224 64c9.7 0 19.3 .6 28.8 1.8c5.5 .7 11 1.6 16.4 2.7l.2 0z" />
    </Icon>
);

export default PlanetMoon;