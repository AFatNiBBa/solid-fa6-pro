
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=sharp-duotone-solid dial-med}
 * @preview ![dial-med](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dial-med.svg)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
        <path d="M264 129c-77 11.6-136 78-136 158.2c0 88.4 71.6 160 160 160s160-71.6 160-160C448 207 389 140.6 312 129l0 158.2 0 24-48 0 0-24L264 129z" />
    </Icon>
);

export default DialMed;