
import { Icon } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=light sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l16 0 0 192c0 59.6 40.8 109.8 96 124l0 68-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l520 0c39.8 0 72-32.2 72-72l0-24c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 24c0 22.1-17.9 40-40 40l-120 0 0-64c70.7 0 128-57.3 128-128l0-128 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32 0-56 0c-22.1 0-40 17.9-40 40l0 35.8c0 28.8-23.4 52.2-52.2 52.2c-72 0-139-37.1-177.1-98.2l-7.2-11.5C179.6 63.4 124 32.4 64 32l-1 0-7 0L32 32 16 32zM416 448l-256 0 0-64 256 0 0 64zm72-320l56 0 0 128c0 53-43 96-96 96l-288 0c-53 0-96-43-96-96L64 64c48.9 .4 94.3 25.7 120.3 67.2l7.2 11.5C235.5 213.2 312.7 256 395.8 256c46.5 0 84.2-37.7 84.2-84.2l0-35.8c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default Sleigh;