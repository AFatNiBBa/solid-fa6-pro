
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=sharp-solid calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zM253.6 303.2L224 232l-29.6 71.2-76.9 6.2 58.6 50.2-17.9 75L224 394.4l65.8 40.2-17.9-75 58.6-50.2-76.9-6.2z" />
    </Icon>
);

export default CalendarStar;