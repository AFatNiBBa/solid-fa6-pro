
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=sharp-solid calendar-clock}
 * @preview ![calendar-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/calendar-clock.svg)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 0l0 64L0 64l0 96 448 0 0-96-96 0 0-64L288 0l0 64L160 64l0-64L96 0zM448 192l-16 0L0 192 0 512l330.8 0C285.6 480.1 256 427.5 256 368c0-97.2 78.8-176 176-176c5.4 0 10.7 .2 16 .7l0-.7zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM448 288l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default CalendarClock;