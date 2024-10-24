
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus?s=sharp-duotone-solid bus}
 * @preview ![bus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bus.svg)
 */
const Bus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 448l0 64 96 0 0-64-96 0zm32-320c0 53.3 0 106.7 0 160l144 0 0-160-144 0zm176 0l0 160 144 0 0-160-144 0zm80 320l0 64 96 0 0-64-96 0z" />
        <path d="M288 0C412.8 0 512 48 512 48l0 48 0 32 32 0 0 128-32 0 0 192L64 448l0-192-32 0 0-128 32 0 0-32s0 0 0 0l0-48s99.2-48 224-48zm16 128l0 160 144 0 0-160-144 0zm-32 0l-144 0 0 160 144 0 0-160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 96l0-32-16 0L208 64l-16 0 0 32 16 0 160 0 16 0z" />
    </Icon>
);

export default Bus;