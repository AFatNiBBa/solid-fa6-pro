
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=regular circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm89.1-343.2c9.3-9.5 9.2-24.6-.3-33.9s-24.6-9.2-33.9 .3L208 239.8l0-87.8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 146.5 0 61.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-51.7 30-30.5 70.7 96.4c7.8 10.7 22.9 13 33.5 5.2s13-22.9 5.2-33.5L272.1 243.1l73.1-74.3z" />
    </Icon>
);

export default CircleK;