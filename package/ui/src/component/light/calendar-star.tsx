
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=light calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L64 64C28.7 64 0 92.7 0 128l0 32 0 32L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-32 0-32c0-35.3-28.7-64-64-64l-32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L128 64l0-48zM32 192l384 0 0 256c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256zM64 96l320 0c17.7 0 32 14.3 32 32l0 32L32 160l0-32c0-17.7 14.3-32 32-32zM245.5 231.5c-8.8-17.8-34.2-17.8-43 0l-22 44.6-49.2 7.2c-19.7 2.9-27.5 27.1-13.3 40.9l35.6 34.7-8.4 49c-3.4 19.6 17.2 34.6 34.8 25.3l44-23.2 44 23.2c17.6 9.3 38.2-5.7 34.8-25.3l-8.4-49 35.6-34.7c14.2-13.9 6.4-38.1-13.3-40.9l-49.2-7.2-22-44.6zm-40.1 66.3L224 260.2l18.6 37.6 3.7 7.5 8.3 1.2 41.5 6-30 29.3-6 5.9 1.4 8.3 7.1 41.4-37.1-19.5-7.4-3.9-7.4 3.9-37.1 19.5 7.1-41.4 1.4-8.3-6-5.9-30-29.3 41.5-6 8.3-1.2 3.7-7.5z" />
    </Icon>
);

export default CalendarStar;