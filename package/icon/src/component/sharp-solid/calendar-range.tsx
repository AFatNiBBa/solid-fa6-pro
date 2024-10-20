
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-range` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=sharp-solid calendar-range}
 * @preview ![calendar-range](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-range.svg)
 */
const CalendarRange: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0l0 64L0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0zM448 192L0 192 0 512l448 0 0-320zM128 256l0 64-64 0 0-64 64 0zM320 448l0-64 64 0 0 64-64 0zm64-184l0 48-192 0 0-48 192 0zM64 392l192 0 0 48L64 440l0-48z" />
    </Icon>
);

export default CalendarRange;