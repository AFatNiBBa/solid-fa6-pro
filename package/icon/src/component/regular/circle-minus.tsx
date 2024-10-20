
import { Icon } from "../../index";

/**
 * A component that renders the `circle-minus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=regular circle-minus}
 * @preview ![circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-minus.svg)
 */
const CircleMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
    </Icon>
);

export default CircleMinus;