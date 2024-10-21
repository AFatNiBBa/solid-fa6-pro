
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=sharp-light mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M252.2 320l19.8 0 32 0 19.8 0 8.8 17.7L371.8 416l28.2 0c41 0 76.8-13.6 102.1-37.3c25-23.4 41.9-58.7 41.9-106.7c0-49.8-14-91.7-48.9-121.8C459.3 119.3 396.2 96 288 96s-171.3 23.3-207.1 54.2C46 180.3 32 222.2 32 272c0 47.9 16.9 83.2 41.9 106.7C99.2 402.4 135 416 176 416l28.2 0 39.2-78.3 8.8-17.7zM224 448l-48 0C80 448 0 384 0 272S64 64 288 64s288 96 288 208s-80 176-176 176l-48 0-48-96-32 0-48 96zM160 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm288 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Mask;