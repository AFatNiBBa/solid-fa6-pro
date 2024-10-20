
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=sharp-duotone-solid rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M97.6 97.6c87.5-87.5 229.3-87.5 316.8 0C458.1 141.3 480 198.7 480 256s-21.9 114.7-65.6 158.4c-87.5 87.5-229.3 87.5-316.8 0l45.3-45.3c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L97.6 97.6z" />
        <path d="M176 224l24-24L40 40 16 64l0 160H176z" />
    </Icon>
);

export default RotateLeft;