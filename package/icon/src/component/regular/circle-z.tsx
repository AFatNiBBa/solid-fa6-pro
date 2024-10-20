
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=regular circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l98.2 0L164.3 346.3c-5.1 7.3-5.7 16.9-1.5 24.8S175.1 384 184 384l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-98.2 0L347.7 165.7c5.1-7.3 5.7-16.9 1.5-24.8S336.9 128 328 128l-144 0z" />
    </Icon>
);

export default CircleZ;