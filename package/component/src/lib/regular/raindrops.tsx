
import { Icon } from "../../index";

/**
 * A component that renders the `raindrops` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raindrops?s=regular raindrops}
 * @preview ![raindrops](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/raindrops.svg)
 */
const Raindrops: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M105.9 106.6l41.9-67.8C150.4 34.6 155 32 160 32s9.6 2.6 12.2 6.8l41.9 67.8c6.5 10.5 9.9 22.6 9.9 34.9l0 2.5c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-2.5c0-12.3 3.4-24.4 9.9-34.9zm-96 192l41.9-67.8C54.4 226.6 59 224 64 224s9.6 2.6 12.2 6.8l41.9 67.8c6.5 10.5 9.9 22.6 9.9 34.9l0 2.5c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-2.5c0-12.3 3.4-24.4 9.9-34.9zm242.6 11.5c-8.2 12.7-12.5 27.6-12.5 42.7c0 43.4 35.9 79.2 80 79.2s80-35.8 80-79.2c0-15.1-4.3-30-12.5-42.7L320 204.6 252.5 310.1zm-40.4-25.9l95.6-149.5c2.7-4.2 7.3-6.7 12.3-6.7s9.6 2.5 12.3 6.7l95.6 149.5C441 304.7 448 328.5 448 352.8C448 423 390.3 480 320 480s-128-57-128-127.2c0-24.3 7-48.1 20.1-68.6z" />
    </Icon>
);

export default Raindrops;