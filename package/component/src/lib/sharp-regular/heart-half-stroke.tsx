
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=sharp-regular heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 412.1L414.1 254.1l24.2-24.2c16.5-16.5 25.7-38.8 25.7-62.1c0-48.5-39.3-87.8-87.8-87.8c-23.3 0-45.6 9.2-62.1 25.7L289.9 130 256 163.9l0 248.2zM256 96l24.2-24.2c0 0 0 0 0 0c25.5-25.4 60-39.7 96-39.7C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 289.9 446.1 256 480l-33.9-33.9L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8c0 0 0 0 0 0s0 0 0 0C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96s0 0 0 0z" />
    </Icon>
);

export default HeartHalfStroke;