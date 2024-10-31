
import { Icon } from "../../index";

/**
 * A component that renders the `scarf` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarf?s=solid scarf}
 * @preview ![scarf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/scarf.svg)
 */
const Scarf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 137.4L374.6 256l9.4 9.4 11.3 11.3 112 112c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L384 310.6 358.6 336 459.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L336 358.6 310.6 384 411.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-112-112L128.4 247C107.7 226.3 96 198.1 96 168.8c0-19 4.9-37.7 14.2-54.2l41.5-73.8C165.9 15.6 192.5 0 221.4 0l69.1 0c28.9 0 55.6 15.6 69.7 40.8l41.5 73.8c9.3 16.6 14.2 35.2 14.2 54.2c0 22.8-7 44.9-19.9 63.4L278.6 114.7l15.1-15.1C283.1 97.5 270.3 96 256 96s-27.1 1.5-37.8 3.6L256 137.4zM4.7 388.7l112-112 22.6 22.6-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm48 48l112-112 22.6 22.6-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm48 48l112-112 22.6 22.6-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z" />
    </Icon>
);

export default Scarf;