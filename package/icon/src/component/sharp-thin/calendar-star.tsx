
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=sharp-thin calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8l0-8L112 0l0 8 0 56L16 64 0 64 0 80l0 96 0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-304 0-16 0-96 0-16-16 0-96 0 0-56 0-8L320 0l0 8 0 56L128 64l0-56zM16 192l416 0 0 304L16 496l0-304zM112 80l0 40 0 8 16 0 0-8 0-40 192 0 0 40 0 8 16 0 0-8 0-40 96 0 0 96L16 176l0-96 96 0zM231.2 236.5L224 221.9l-7.2 14.5-31.1 62.9-69.4 10.1-16 2.3 11.6 11.3 50.2 49-11.9 69.2-2.7 16 14.3-7.5L224 417l62.1 32.7 14.3 7.5-2.7-16-11.9-69.2 50.2-49 11.6-11.3-16-2.3-69.4-10.1-31.1-62.9zm-32.9 73.8L224 258.1l25.7 52.2 1.9 3.8 4.2 .6 57.6 8.4-41.7 40.6-3 2.9 .7 4.1 9.8 57.3-51.5-27.1-3.7-2-3.7 2L168.8 428l9.8-57.3 .7-4.1-3-2.9L134.7 323l57.6-8.4 4.2-.6 1.9-3.8z" />
    </Icon>
);

export default CalendarStar;