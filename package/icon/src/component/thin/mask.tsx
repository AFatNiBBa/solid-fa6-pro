
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=thin mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M70.5 138.1C31 172.2 16 219.1 16 272c0 52 18.4 91.6 46.9 118.3C91.6 417.2 131.5 432 176 432l8.4 0c18.2 0 34.8-10.3 42.9-26.5l23.2-46.3C257.6 345 272.1 336 288 336s30.4 9 37.5 23.2l23.2 46.3c8.1 16.3 24.8 26.5 42.9 26.5l8.4 0c44.5 0 84.4-14.8 113.1-41.7C541.6 363.6 560 324 560 272c0-52.9-15-99.8-54.5-133.9C465.6 103.6 398.1 80 288 80s-177.6 23.6-217.5 58.1zM0 272C0 160 64 64 288 64s288 96 288 208s-80 176-176 176l-8.4 0c-24.2 0-46.4-13.7-57.2-35.4l-23.2-46.3c-4.4-8.8-13.3-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-23.2 46.3c-10.8 21.7-33 35.4-57.2 35.4l-8.4 0C80 448 0 384 0 272zm160 32a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm304 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Mask;