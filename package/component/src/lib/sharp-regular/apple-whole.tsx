
import { Icon } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=sharp-regular apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 96l0-16c0-44.2 35.8-80 80-80l16 0 16 0 0 16 0 16c0 44.2-35.8 80-80 80l-16 0-16 0 0-16zm-96 32l112 32 112-32c76.3 0 112 83.7 112 160c0 128-80 224-160 224l-64-16-64 16C80 512 0 416 0 288c0-76.3 35.7-160 112-160zm125.2 78.2L224 209.9l-13.2-3.8L106.4 176.3c-14.8 1.7-27.2 10.2-37.9 28C55.6 225.5 48 256.3 48 288c0 54.2 17 100 40.4 131.2c22.1 29.5 46.9 42.7 66.7 44.6l57.3-14.3 11.6-2.9 11.6 2.9 57.3 14.3c19.7-1.9 44.5-15.1 66.7-44.6C383 388 400 342.2 400 288c0-31.7-7.6-62.5-20.4-83.7c-10.7-17.7-23.1-26.3-37.9-28L237.2 206.2z" />
    </Icon>
);

export default AppleWhole;