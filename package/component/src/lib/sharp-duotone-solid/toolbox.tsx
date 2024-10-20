
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-duotone-solid toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l128 0 0 32 0 32 64 0 0-32 0-32 128 0 0 32 0 32 64 0 0-32 0-32 128 0 0 160L0 480 0 320zM128 32l24 0 208 0 24 0 0 24 0 72-48 0 0-48L176 80l0 48-48 0 0-72 0-24z" />
        <path d="M0 320L0 208l80-80 352 0 80 80 0 112-128 0 0-32 0-32-64 0 0 32 0 32-128 0 0-32 0-32-64 0 0 32 0 32L0 320z" />
    </Icon>
);

export default Toolbox;