
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=light infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 233.5C0 157.5 61.5 96 137.5 96c39.3 0 76.7 16.8 102.7 46.1L320 231.9l79.8-89.8C425.9 112.8 463.3 96 502.5 96C578.5 96 640 157.5 640 233.5l0 45.1C640 354.5 578.5 416 502.5 416c-39.3 0-76.7-16.8-102.7-46.1L320 280.1l-79.8 89.8C214.1 399.2 176.7 416 137.5 416C61.5 416 0 354.5 0 278.5l0-45.1zM298.6 256l-82.3-92.6c-20-22.5-48.7-35.4-78.8-35.4C79.2 128 32 175.2 32 233.5l0 45.1C32 336.8 79.2 384 137.5 384c30.1 0 58.8-12.9 78.8-35.4L298.6 256zm42.8 0l82.3 92.6c20 22.5 48.7 35.4 78.8 35.4C560.8 384 608 336.8 608 278.5l0-45.1C608 175.2 560.8 128 502.5 128c-30.1 0-58.8 12.9-78.8 35.4L341.4 256z" />
    </Icon>
);

export default Infinity;