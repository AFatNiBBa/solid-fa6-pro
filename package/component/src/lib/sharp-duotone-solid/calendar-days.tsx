
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-days` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=sharp-duotone-solid calendar-days}
 * @preview ![calendar-days](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-days.svg)
 */
const CalendarDays: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 320L0 512 0 192zm64 64l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM192 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM320 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M160 32l0-32L96 0l0 32 0 32L0 64 0 192l448 0 0-128-96 0 0-32 0-32L288 0l0 32 0 32L160 64l0-32z" />
    </Icon>
);

export default CalendarDays;