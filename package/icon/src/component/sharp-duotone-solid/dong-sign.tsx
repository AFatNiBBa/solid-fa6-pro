
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dong-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dong-sign?s=sharp-duotone-solid dong-sign}
 * @preview ![dong-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dong-sign.svg)
 */
const DongSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 64 384 0 0-64L0 448zM192 64l0 64 64 0 0-64-64 0zm128 0l0 64 32 0 0-64-32 0z" />
        <path d="M320 32l-64 0 0 145.1c-18.8-10.9-40.7-17.1-64-17.1c-70.7 0-128 57.3-128 128s57.3 128 128 128c23.3 0 45.2-6.2 64-17.1l0 17.1 64 0 0-128 0-256zM128 288a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default DongSign;