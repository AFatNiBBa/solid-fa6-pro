
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=light circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM208 96c8.8 0 16 7.2 16 16l0 16 64 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 16 0c26.5 0 48 21.5 48 48l0 16 0 32 0 112c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-112 0-32 0-16c0-26.5 21.5-48 48-48l16 0 0-16c0-8.8 7.2-16 16-16zm-48 80l0 16 192 0 0-16c0-8.8-7.2-16-16-16l-32 0-96 0-32 0c-8.8 0-16 7.2-16 16zm192 48l-192 0 0 112c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-112z" />
    </Icon>
);

export default CircleCalendar;