
import { Icon } from "../../index";

/**
 * A component that renders the `bed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=sharp-solid bed}
 * @preview ![bed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bed.svg)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32l0 32 0 256 224 0 0-160 0-32 32 0 224 0c53 0 96 43 96 96l0 224 0 32-64 0 0-32 0-32-224 0-32 0L64 416l0 32 0 32L0 480l0-32L0 64 0 32l64 0zm112 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Bed;