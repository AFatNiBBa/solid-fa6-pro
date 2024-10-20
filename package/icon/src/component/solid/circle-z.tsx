
import { Icon } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=solid circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l144 0c8.9 0 17.1 5 21.3 12.9s3.6 17.5-1.5 24.8L229.8 336l98.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-8.9 0-17.1-5-21.3-12.9s-3.6-17.5 1.5-24.8L282.2 176 184 176c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default CircleZ;