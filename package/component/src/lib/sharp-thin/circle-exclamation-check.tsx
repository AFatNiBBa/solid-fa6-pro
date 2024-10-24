
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=sharp-thin circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c99.6 0 185 60.7 221.4 147.1l14.8-6.2C453.4 64.7 362.3 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c93 0 174.5-49.7 219.3-123.9l-13.7-8.3C419.6 449.5 343.2 496 256 496C123.5 496 16 388.5 16 256zM264 136l0-8-16 0 0 8 0 160 0 8 16 0 0-8 0-160zm8 232l0-32-32 0 0 32 32 0zM619.3 192L608 180.7l-5.7 5.7L480 308.7l-58.3-58.3-5.7-5.7L404.7 256l5.7 5.7 64 64 5.7 5.7 5.7-5.7 128-128 5.7-5.7z" />
    </Icon>
);

export default CircleExclamationCheck;