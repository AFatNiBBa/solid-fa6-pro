
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bus-school` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-school?s=sharp-duotone-solid bus-school}
 * @preview ![bus-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bus-school.svg)
 */
const BusSchool: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 448l0 64 96 0 0-64-96 0zm48-320c0 42.7 0 85.3 0 128l128 0 0-128-128 0zm160 0l0 128 128 0 0-128-128 0zm80 320l0 64 96 0 0-64-96 0z" />
        <path d="M256 0C371.9 0 464 48 464 48l0 48 0 16 48 0 0 128-48 0 0 16 16 0 0 192L32 448l0-192 16 0L48 96s0 0 0 0l0-48s92.1-48 208-48zM48 112l0 128L0 240 0 112l48 0zm224 16l0 128 128 0 0-128-128 0zm-32 0l-128 0 0 128 128 0 0-128zM112 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 96l0-32-16 0L176 64l-16 0 0 32 16 0 160 0 16 0z" />
    </Icon>
);

export default BusSchool;