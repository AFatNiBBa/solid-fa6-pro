
import { Icon } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=light apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M228.6 96L224 96l0-4.6C224 58.6 250.6 32 283.4 32l4.6 0 0 4.6C288 69.4 261.4 96 228.6 96zm-18.3 32l18.3 0c50.5 0 91.4-40.9 91.4-91.4l0-18.3C320 8.2 311.8 0 301.7 0L283.4 0C232.9 0 192 40.9 192 91.4l0 18.3c0 10.1 8.2 18.3 18.3 18.3zM32 288c0-33.8 8-67.7 22.8-92c14.2-23.5 33-36 57.2-36c21 0 48.7 8.4 71.1 17.1c26.2 10.2 55.6 10.2 81.9 0C287.3 168.4 315 160 336 160c24.3 0 43 12.5 57.2 36C408 220.3 416 254.2 416 288c0 57.5-18 106.6-43.6 140.8C346.4 463.5 315 480 288 480c-13.2 0-32-2.7-45.3-5c-12.3-2.2-25-2.2-37.3 0c-13.3 2.3-32.1 5-45.3 5c-27 0-58.4-16.5-84.4-51.2C50 394.6 32 345.5 32 288zM160 512c16.2 0 37.4-3.2 50.8-5.5c8.7-1.5 17.6-1.5 26.3 0c13.5 2.4 34.6 5.5 50.8 5.5c80 0 160-96 160-224c0-76.3-35.7-160-112-160c-27.3 0-59.7 10.3-82.7 19.3c-18.8 7.3-39.9 7.3-58.7 0C171.7 138.3 139.3 128 112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512z" />
    </Icon>
);

export default AppleWhole;