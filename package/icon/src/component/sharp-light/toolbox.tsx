
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-light toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32l16 0 224 0 16 0 0 16 0 80 48 0 80 80 0 240 0 32-32 0L32 480 0 480l0-32L0 208l80-80 48 0 0-80 0-16zM352 64L160 64l0 64 192 0 0-64zM93.3 160L32 221.3 32 320l128 0 0-32 0-16 32 0 0 16 0 32 128 0 0-32 0-16 32 0 0 16 0 32 128 0 0-98.7L418.7 160 384 160l-32 0-192 0-32 0-34.7 0zM32 352l0 96 448 0 0-96-128 0 0 32 0 16-32 0 0-16 0-32-128 0 0 32 0 16-32 0 0-16 0-32L32 352z" />
    </Icon>
);

export default Toolbox;