
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=sharp-duotone-solid calendar-arrow-down}
 * @preview ![calendar-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-arrow-down.svg)
 */
const CalendarArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zM110.1 344L144 310.1l17 17 39 39L200 264l0-24 48 0 0 24 0 102.1 39-39 17-17L337.9 344l-17 17-80 80-17 17-17-17-80-80-17-17z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zm88 264l0-24-48 0 0 24 0 102.1-39-39-17-17L110.1 344l17 17 80 80 17 17 17-17 80-80 17-17L304 310.1l-17 17-39 39L248 264z" />
    </Icon>
);

export default CalendarArrowDown;