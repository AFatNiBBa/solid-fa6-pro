
import { Icon } from "../../index";

/**
 * A component that renders the `infinity` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/infinity?s=regular infinity}
 * @preview ![infinity](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/infinity.svg)
 */
const Infinity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 237.3C0 159.3 63.3 96 141.3 96c39 0 76.2 16.1 102.9 44.5L320 221l75.8-80.5C422.5 112.1 459.7 96 498.7 96c78 0 141.3 63.3 141.3 141.3l0 37.4c0 78-63.3 141.3-141.3 141.3c-39 0-76.2-16.1-102.9-44.5L320 291l-75.8 80.5C217.5 399.9 180.3 416 141.3 416C63.3 416 0 352.7 0 274.7l0-37.4zM287 256l-77.8-82.6c-17.6-18.7-42.2-29.4-68-29.4C89.8 144 48 185.8 48 237.3l0 37.4c0 51.5 41.8 93.3 93.3 93.3c25.7 0 50.3-10.6 68-29.4L287 256zm65.9 0l77.8 82.6c17.6 18.7 42.2 29.4 68 29.4c51.5 0 93.3-41.8 93.3-93.3l0-37.4c0-51.5-41.8-93.3-93.3-93.3c-25.7 0-50.3 10.6-68 29.4L353 256z" />
    </Icon>
);

export default Infinity;