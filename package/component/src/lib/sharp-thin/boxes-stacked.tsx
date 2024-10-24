
import { Icon } from "../../index";

/**
 * A component that renders the `boxes-stacked` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-stacked?s=sharp-thin boxes-stacked}
 * @preview ![boxes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/boxes-stacked.svg)
 */
const BoxesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 16l0 192 16 0 0-192 0-16L416 0 336 0 320 0 256 0 240 0 160 0 144 0l0 16 0 192 16 0 0-192 80 0 0 80 0 16 16 0 64 0 16 0 0-16 0-80 80 0zM256 16l64 0 0 80-64 0 0-80zm64 496l240 0 16 0 0-16 0-240 0-16-16 0-80 0-16 0-64 0-16 0-64 0 0 16 64 0 0 80 0 16 16 0 64 0 16 0 0-16 0-80 80 0 0 240-240 0 0 16zm80-256l64 0 0 80-64 0 0-80zm-128 0l0 240L16 496l0-240 80 0 0 80 0 16 16 0 64 0 16 0 0-16 0-80 80 0zM112 336l0-80 64 0 0 80-64 0zm160-96l-80 0-16 0-64 0-16 0-80 0L0 240l0 16L0 496l0 16 16 0 256 0 16 0 0-16 0-240 0-16-16 0z" />
    </Icon>
);

export default BoxesStacked;