
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=light circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM229.9 129.1c8.2 3.3 12.2 12.6 8.9 20.8L183.6 288 288 288l0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-128 0c-5.3 0-10.3-2.6-13.2-7s-3.6-10-1.6-14.9l64-160c3.3-8.2 12.6-12.2 20.8-8.9z" />
    </Icon>
);

export default Circle_4;