
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baby` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baby?s=sharp-duotone-solid baby}
 * @preview ![baby](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/baby.svg)
 */
const Baby: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16.1 176.8l32.3 23.5L128 258.2l0 29.8 35.8 0 .9 0 118.5 0 .9 0 35.8 0 0-29.8 79.5-57.8 32.3-23.5-47.1-64.7-32.3 23.5L275 192l-102 0L95.5 135.7 63.2 112.1 16.1 176.8zM59 407.8l22.7 26.3 40 46.4 26.1 30.3 60.6-52.2-26.1-30.3L165 408.2l23.7-27.1c-20.1-17.6-40.1-35.1-60.2-52.7L81.9 381.7 59 407.8zM152 88a72 72 0 1 0 144 0A72 72 0 1 0 152 88zm87.6 370.6l60.6 52.2 26.1-30.3 40-46.4L389 407.8l-22.9-26.1-46.6-53.2c-20.1 17.6-40.1 35.1-60.2 52.7L283 408.2l-17.3 20.1-26.1 30.3z" />
        <path d="M192 384l-64-56V288H320v40l-64 56H192z" />
    </Icon>
);

export default Baby;