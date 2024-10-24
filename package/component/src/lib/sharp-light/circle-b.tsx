
import { Icon } from "../../index";

/**
 * A component that renders the `circle-b` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-b?s=sharp-light circle-b}
 * @preview ![circle-b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-b.svg)
 */
const CircleB: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 16 0 112 0 112 0 16 16 0 120 0c39.8 0 72-32.2 72-72c0-26.6-14.4-49.8-35.9-62.3C344.4 236.8 352 219.3 352 200c0-39.8-32.2-72-72-72l-104 0-16 0zm160 72c0 22.1-17.9 40-40 40l-88 0 0-80 88 0c22.1 0 40 17.9 40 40zM192 352l0-80 88 0 16 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-104 0z" />
    </Icon>
);

export default CircleB;