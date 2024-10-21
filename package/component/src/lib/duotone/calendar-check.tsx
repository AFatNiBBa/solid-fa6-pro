
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=duotone calendar-check}
 * @preview ![calendar-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-check.svg)
 */
const CalendarCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM119 319c-9.4 9.4-9.4 24.6 0 33.9l64 64c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
        <path d="M128 0C110.3 0 96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 80 448 0 0-80c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z" />
    </Icon>
);

export default CalendarCheck;