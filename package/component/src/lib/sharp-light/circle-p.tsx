
import { Icon } from "../../index";

/**
 * A component that renders the `circle-p` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-p?s=sharp-light circle-p}
 * @preview ![circle-p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-p.svg)
 */
const CircleP: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128l-16 0 0 16 0 144 0 80 0 16 32 0 0-16 0-64 72 0c48.6 0 88-39.4 88-88s-39.4-88-88-88l-88 0zm88 144l-72 0 0-112 72 0c30.9 0 56 25.1 56 56s-25.1 56-56 56z" />
    </Icon>
);

export default CircleP;