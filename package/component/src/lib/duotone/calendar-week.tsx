
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-week` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-week?s=duotone calendar-week}
 * @preview ![calendar-week](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-week.svg)
 */
const CalendarWeek: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272L0 192zm64 80c0-8.8 7.2-16 16-16l288 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-64z" />
        <path d="M96 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 80L0 192l0-80C0 85.5 21.5 64 48 64l48 0 0-32z" />
    </Icon>
);

export default CalendarWeek;