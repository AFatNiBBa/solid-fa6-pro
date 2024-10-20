
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=thin calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L64 64C28.7 64 0 92.7 0 128l0 48 0 16L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-16 0-48c0-35.3-28.7-64-64-64l-48 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L128 64l0-56zM16 192l416 0 0 256c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-256zM112 80l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 192 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 48 0c26.5 0 48 21.5 48 48l0 48L16 176l0-48c0-26.5 21.5-48 48-48l48 0zM238.3 251c-5.9-11.9-22.8-11.9-28.7 0l-23.9 48.4-53.4 7.8c-13.1 1.9-18.4 18-8.9 27.3l38.6 37.7L153 425.3c-2.2 13.1 11.5 23 23.2 16.9L224 417l47.8 25.1c11.7 6.2 25.5-3.8 23.2-16.9l-9.1-53.2 38.6-37.7c9.5-9.3 4.3-25.4-8.9-27.3l-53.4-7.8L238.3 251zM224 258.1l25.7 52.2 1.9 3.8 4.2 .6 57.6 8.4-41.7 40.6-3 2.9 .7 4.1 9.8 57.3-51.5-27.1-3.7-2-3.7 2L168.8 428l9.8-57.3 .7-4.1-3-2.9L134.7 323l57.6-8.4 4.2-.6 1.9-3.8L224 258.1z" />
    </Icon>
);

export default CalendarStar;