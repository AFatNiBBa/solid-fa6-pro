
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=duotone crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 32l0 32 0 64 0 256c0 35.3 28.7 64 64 64l256 0 0-64-210.7 0L384 173.3l0-45.3-45.3 0L128 338.7 128 128l0-64 0-32c0-17.7-14.3-32-32-32S64 14.3 64 32zM400.6 66.2c22 5.9 39.4 23.2 45.3 45.3l56.8-56.8c12.5-12.5 12.5-32.8 0-45.3C496.4 3.1 488.2 0 480 0s-16.4 3.1-22.6 9.4L400.6 66.2zM448 384l0 64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
        <path d="M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l32 0 0-64L32 64zM384 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352c0-35.3-28.7-64-64-64L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default Crop;