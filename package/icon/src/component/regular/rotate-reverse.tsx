
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-reverse` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-reverse?s=regular rotate-reverse}
 * @preview ![rotate-reverse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rotate-reverse.svg)
 */
const RotateReverse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M418 187.1C391.2 124.1 328.7 80 256 80c-39.7 0-77.8 15.8-105.9 43.9l-4.1 4.1 35.7 35.7c6.6 6.6 10.3 15.6 10.3 25c0 19.5-15.8 35.3-35.3 35.3L40 224c-13.3 0-24-10.7-24-24L16 83.3C16 63.8 31.8 48 51.3 48c9.4 0 18.3 3.7 25 10.3L112 94.1l4.1-4.1C153.2 52.8 203.5 32 256 32c92.6 0 172.1 56.2 206.2 136.3c5.2 12.2-.5 26.3-12.7 31.5s-26.3-.5-31.5-12.7zM50 344.1c-5.2-12.2 .4-26.3 12.6-31.5s26.3 .4 31.5 12.6C121 388.1 183.4 432 256 432c39.7 0 77.8-15.8 105.9-43.9l4.1-4.1-35.7-35.7c-6.6-6.6-10.3-15.6-10.3-25c0-19.5 15.8-35.3 35.3-35.3L472 288c13.3 0 24 10.7 24 24l0 116.7c0 19.5-15.8 35.3-35.3 35.3c-9.4 0-18.3-3.7-25-10.3L400 417.9l-4.1 4.1C358.8 459.2 308.5 480 256 480c-92.5 0-171.8-56-206-135.9zM64 176l62.1 0L64 113.9 64 176zM448 336l-62.1 0L448 398.1l0-62.1z" />
    </Icon>
);

export default RotateReverse;