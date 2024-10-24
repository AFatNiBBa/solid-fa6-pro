
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-right?s=light circle-caret-right}
 * @preview ![circle-caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-caret-right.svg)
 */
const CircleCaretRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm352 0c0-9.6-4-18.7-11-25.2L238.2 135.3c-5.1-4.7-11.8-7.3-18.7-7.3c-15.2 0-27.5 12.3-27.5 27.5l0 201c0 15.2 12.3 27.5 27.5 27.5c6.9 0 13.6-2.6 18.7-7.3L341 281.2c7-6.5 11-15.6 11-25.2zm-32.7-1.7c.5 .4 .7 1.1 .7 1.7s-.3 1.3-.7 1.7L224 346.2l0-180.3 95.3 88.4z" />
    </Icon>
);

export default CircleCaretRight;