
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-low` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-low?s=sharp-duotone-solid dial-low}
 * @preview ![dial-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dial-low.svg)
 */
const DialLow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
        <path d="M129.4 311.6c11.6 77 78 136 158.2 136c88.4 0 160-71.6 160-160s-71.6-160-160-160c-80.2 0-146.6 59-158.2 136l158.2 0 24 0 0 48-24 0-158.2 0z" />
    </Icon>
);

export default DialLow;