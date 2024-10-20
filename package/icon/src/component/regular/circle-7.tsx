
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=regular circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l103.8 0-93 172.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l112-208c4-7.4 3.8-16.4-.5-23.7s-12.2-11.7-20.6-11.7l-144 0z" />
    </Icon>
);

export default Circle_7;