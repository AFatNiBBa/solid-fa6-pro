
import { Icon } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=sharp-light circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-328l0-48-48 0 0 48 48 0zM160 240l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0zm72 136l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default CircleDivide;