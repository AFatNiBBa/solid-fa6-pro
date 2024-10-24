
import { Icon } from "../../index";

/**
 * A component that renders the `circle-u` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=sharp-regular circle-u}
 * @preview ![circle-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-u.svg)
 */
const CircleU: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 168l0-24-48 0 0 24 0 120c0 61.9 50.1 112 112 112s112-50.1 112-112l0-120 0-24-48 0 0 24 0 120c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-120z" />
    </Icon>
);

export default CircleU;