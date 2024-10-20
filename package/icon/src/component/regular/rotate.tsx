
import { Icon } from "../../index";

/**
 * A component that renders the `rotate` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=regular rotate}
 * @preview ![rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rotate.svg)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M94 187.1C120.8 124.1 183.3 80 256 80c39.7 0 77.8 15.8 105.9 43.9l4.1 4.1-35.7 35.7c-6.6 6.6-10.3 15.6-10.3 25c0 19.5 15.8 35.3 35.3 35.3L472 224c13.3 0 24-10.7 24-24l0-116.7C496 63.8 480.2 48 460.7 48c-9.4 0-18.3 3.7-25 10.3L400 94.1l-4.1-4.1C358.8 52.8 308.5 32 256 32C163.4 32 83.9 88.2 49.8 168.3c-5.2 12.2 .5 26.3 12.7 31.5s26.3-.5 31.5-12.7zm368 157c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6C391 388.1 328.6 432 256 432c-39.7 0-77.8-15.8-105.9-43.9l-4.1-4.1 35.7-35.7c6.6-6.6 10.3-15.6 10.3-25c0-19.5-15.8-35.3-35.3-35.3L40 288c-13.3 0-24 10.7-24 24l0 116.7C16 448.2 31.8 464 51.3 464c9.4 0 18.3-3.7 25-10.3L112 417.9l4.1 4.1C153.2 459.2 203.5 480 256 480c92.5 0 171.8-56 206-135.9zM448 176l-62.1 0L448 113.9l0 62.1zM64 336l62.1 0L64 398.1 64 336z" />
    </Icon>
);

export default Rotate;