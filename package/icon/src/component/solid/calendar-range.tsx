
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-range` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=solid calendar-range}
 * @preview ![calendar-range](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/calendar-range.svg)
 */
const CalendarRange: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272zM128 288a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM352 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM192 288c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24zm40 104c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 440c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0z" />
    </Icon>
);

export default CalendarRange;