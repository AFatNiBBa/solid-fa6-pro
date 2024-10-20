
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=duotone calendar-arrow-down}
 * @preview ![calendar-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-arrow-down.svg)
 */
const CalendarArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zM127 327c-9.4 9.4-9.4 24.6 0 33.9l80 80c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L248 264c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 102.1-39-39c-9.4-9.4-24.6-9.4-33.9 0z" />
        <path d="M128 0C110.3 0 96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 80 448 0 0-80c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32zM248 264c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 102.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L248 264z" />
    </Icon>
);

export default CalendarArrowDown;