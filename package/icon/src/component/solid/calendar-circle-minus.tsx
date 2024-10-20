
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=solid calendar-circle-minus}
 * @preview ![calendar-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/calendar-circle-minus.svg)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0C110.3 0 96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32zM256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192 0 464c0 26.5 21.5 48 48 48l282.8 0C285.6 480.1 256 427.5 256 368zm320 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-64 0c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default CalendarCircleMinus;