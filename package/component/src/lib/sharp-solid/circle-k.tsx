
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-solid circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369.1 128l-1 1.1L270.3 238.3 362 376.7l4.8 7.3-57.6 0L237.1 275.2 208 307.7l0 52.3 0 24-48 0 0-24 0-61.5L160 152l0-24 48 0 0 24 0 83.8L222.1 220l82.5-92 64.5 0z" />
    </Icon>
);

export default CircleK;