
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-day` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-day?s=sharp-solid calendar-day}
 * @preview ![calendar-day](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-day.svg)
 */
const CalendarDay: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l0 64 128 0 0-64 64 0 0 64 96 0 0 96L0 160 0 64l96 0L96 0l64 0zM0 192l448 0 0 320L0 512 0 192zm192 64L64 256l0 128 128 0 0-128z" />
    </Icon>
);

export default CalendarDay;