
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=sharp-regular mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M242.3 304l29.7 0 32 0 29.7 0 13.3 26.5L381.7 400l18.3 0c37.4 0 69.2-12.4 91.2-33c21.5-20.2 36.8-51.1 36.8-95c0-46.8-13-83.5-43.4-109.7C452.9 134.9 394.3 112 288 112s-164.9 22.9-196.6 50.3C61 188.5 48 225.2 48 272c0 43.9 15.3 74.8 36.8 95c22 20.6 53.7 33 91.2 33l18.3 0 34.7-69.5L242.3 304zM224 448l-48 0C80 448 0 384 0 272S64 64 288 64s288 96 288 208s-80 176-176 176l-48 0-37.2-74.3-.2-.3L304 352l-32 0-10.7 21.3-.2 .3L224 448zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm320-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Mask;