
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=thin calendar-clock}
 * @preview ![calendar-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-clock.svg)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M120 0c4.4 0 8 3.6 8 8l0 56 192 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 48 0c35.3 0 64 28.7 64 64l0 48 0 16 0 .7c-5.3-.5-10.6-.7-16-.7L16 192l0 256c0 26.5 21.5 48 48 48l247.2 0c6.1 5.8 12.7 11.1 19.6 16L64 512c-35.3 0-64-28.7-64-64L0 192l0-16 0-48C0 92.7 28.7 64 64 64l48 0 0-56c0-4.4 3.6-8 8-8zm-8 120l0-40L64 80c-26.5 0-48 21.5-48 48l0 48 416 0 0-48c0-26.5-21.5-48-48-48l-48 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40L128 80l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c4.4 0 8 3.6 8 8l0 64 48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0c-4.4 0-8-3.6-8-8l0-72c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default CalendarClock;