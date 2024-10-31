
import { Icon } from "../../index";

/**
 * A component that renders the `whale` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=sharp-regular whale}
 * @preview ![whale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/whale.svg)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0l24 104 104 24-80 80-83.8-12-8 11.6L80.9 259.1c-5.7 8.3-8 18.5-6.3 28.4C77.7 306.3 93.9 320 113 320l1 0c9.1 0 17.9-3.1 25-8.8l123.8-99.1C330.9 157.7 415.5 128 502.7 128l89.3 0 48 0 0 48 0 256 0 48-48 0-429.6 0C72.7 480 0 407.3 0 317.6c0-39.5 15.7-77.3 43.6-105.2l35.6-35.6L92 164 80 80 160 0zM592 432l0-256-89.3 0c-76.3 0-150.3 26-209.9 73.6L169 348.7c-15.6 12.5-35 19.3-55 19.3l-1 0c-24.3 0-46.5-10-62.5-26.5c11 51.7 56.9 90.5 111.9 90.5L592 432zM392 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Whale;