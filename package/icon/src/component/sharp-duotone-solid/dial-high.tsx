
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-high` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-high?s=sharp-duotone-solid dial-high}
 * @preview ![dial-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dial-high.svg)
 */
const DialHigh: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
        <path d="M446.6 263.6c-11.6-77-78-136-158.2-136c-88.4 0-160 71.6-160 160s71.6 160 160 160c80.2 0 146.6-59 158.2-136l-158.2 0-24 0 0-48 24 0 158.2 0z" />
    </Icon>
);

export default DialHigh;