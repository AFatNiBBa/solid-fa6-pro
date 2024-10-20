
import { Icon } from "../../index";

/**
 * A component that renders the `circle-parking` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-parking?s=light circle-parking}
 * @preview ![circle-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-parking.svg)
 */
const CircleParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208 32l80 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-80 0 0 128zm80 32l-80 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-152c0-13.3 10.7-24 24-24l88 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default CircleParking;