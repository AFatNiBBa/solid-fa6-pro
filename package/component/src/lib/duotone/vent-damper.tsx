
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=duotone vent-damper}
 * @preview ![vent-damper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vent-damper.svg)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320c0 17.7 14.3 32 32 32l32 0 0-192-32 0c-17.7 0-32 14.3-32 32zm576-32l0 192 32 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-32 0z" />
        <path d="M128 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L128 64zm56 80l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 88l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 88l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default VentDamper;