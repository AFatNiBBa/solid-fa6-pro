
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=light calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32zM230 265.4c12.5-18.1 39.2-18.4 52.2-.6l96.3 132.4c15.4 21.2 .3 50.8-25.9 50.8L95.1 448c-26 0-41.2-29.4-26-50.6l51-71.3c11.5-16.1 34.7-18 48.7-4l13.1 13.1L230 265.4zM352.6 416L256.3 283.6l-59.2 85.5c-2.7 3.9-7 6.4-11.7 6.8s-9.4-1.3-12.8-4.6L146 344.7 95.1 416l257.5 0zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CalendarImage;