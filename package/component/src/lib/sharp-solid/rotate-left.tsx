
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-left?s=sharp-solid rotate-left}
 * @preview ![rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rotate-left.svg)
 */
const RotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M142.9 142.9L200 200l-24 24L16 224 16 64 40 40 97.6 97.6s0 0 0 0c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0l45.3-45.3c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0c0 0 0 0 0 0z" />
    </Icon>
);

export default RotateLeft;