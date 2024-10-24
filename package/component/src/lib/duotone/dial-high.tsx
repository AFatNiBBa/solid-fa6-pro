
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-high` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-high?s=duotone dial-high}
 * @preview ![dial-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dial-high.svg)
 */
const DialHigh: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288a32 32 0 1 0 64 0A32 32 0 1 0 0 288zM64 96a32 32 0 1 0 64 0A32 32 0 1 0 64 96zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M446.6 263.6c-11.6-77-78-136-158.2-136c-88.4 0-160 71.6-160 160s71.6 160 160 160c80.2 0 146.6-59 158.2-136l-158.2 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l158.2 0z" />
    </Icon>
);

export default DialHigh;