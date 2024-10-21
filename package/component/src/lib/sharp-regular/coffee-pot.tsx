
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=sharp-regular coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l24 0 98.4 0L192 32l24 0 212.9 0L480 32 462.5 80l-35.2 96.8C478.4 211.3 512 269.7 512 336l0 8c0 80-72 136-72 136l-304 0s-72-56-72-136l0-8c0-65.4 32.7-123.2 82.7-157.9L103.1 80 48 80l0 120 0 24L0 224l0-24L0 56 0 32zM191.2 160l191.2 0 29.1-80L216 80l-24 0-36.4 0 35.6 80zM112.9 320l350.2 0c-5.4-48.9-35.3-90.4-77.1-112L190 208c-41.8 21.6-71.7 63.1-77.1 112zM421.4 432l-266.8 0s0 0 0 0l266.8 0s0 0 0 0z" />
    </Icon>
);

export default CoffeePot;