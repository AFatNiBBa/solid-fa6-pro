
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-up-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-lock?s=sharp-duotone-solid arrow-down-up-lock}
 * @preview ![arrow-down-up-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-up-lock.svg)
 */
const ArrowDownUpLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 64 0 0 98.7L70.6 361.4 48 338.7 2.7 384l22.6 22.6 80 80L128 509.3l22.6-22.6 80-80L253.3 384 208 338.7l-22.6 22.6L160 386.7l0-98.7 224 0 32 0 0-16c0-17.2 3.9-33.5 10.8-48L352 224l0-98.7 25.4 25.4L400 173.3 445.3 128l-22.6-22.6-80-80L320 2.7 297.4 25.4l-80 80L194.7 128 240 173.3l22.6-22.6L288 125.3l0 98.7-128 0-64 0-64 0L0 224zM96 32l0 32 0 128 64 0 0-128 0-32L96 32zM288 320l0 128 0 32 64 0 0-32 0-128-64 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default ArrowDownUpLock;