
import { Icon } from "../../index";

/**
 * A component that renders the `circle-calendar` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-calendar?s=thin circle-calendar}
 * @preview ![circle-calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-calendar.svg)
 */
const CircleCalendar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM200 96c4.4 0 8 3.6 8 8l0 24 96 0 0-24c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24 16 0c26.5 0 48 21.5 48 48l0 32 0 16 0 112c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-112 0-16 0-32c0-26.5 21.5-48 48-48l16 0 0-24c0-4.4 3.6-8 8-8zm-8 72l0-24-16 0c-17.7 0-32 14.3-32 32l0 32 224 0 0-32c0-17.7-14.3-32-32-32l-16 0 0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24-96 0 0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8zm176 56l-224 0 0 112c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-112z" />
    </Icon>
);

export default CircleCalendar;