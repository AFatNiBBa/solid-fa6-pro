
import { Icon } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=sharp-light sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 32L0 32 0 64l16 0 16 0 0 192c0 59.6 40.8 109.8 96 124l0 68-80 0-16 0 0 32 16 0 576 0 16 0 0-16 0-80 0-16-32 0 0 16 0 64-160 0 0-64c70.7 0 128-57.3 128-128l0-128 16 0 16 0 0-32-16 0-16 0-32 0-16 0-48 0-32 0 0 32 0 64 0 32-32 0-6.6 0c-80.5 0-155.3-41.5-198-109.7C179.6 63.4 124 32.4 64 32l-1 0-7 0L32 32 16 32zM416 448l-256 0 0-64 256 0 0 64zM528 128l16 0 0 128c0 53-43 96-96 96l-288 0c-53 0-96-43-96-96L64 64c48.9 .4 94.3 25.7 120.3 67.2C232.8 208.9 317.9 256 409.4 256l38.6 0 32 0 0-32 0-96 48 0z" />
    </Icon>
);

export default Sleigh;