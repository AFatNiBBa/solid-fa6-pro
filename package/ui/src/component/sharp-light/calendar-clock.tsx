
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=sharp-light calendar-clock}
 * @preview ![calendar-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-clock.svg)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0l0 16 0 48 192 0 0-48 0-16 32 0 0 16 0 48 64 0 32 0 0 32 0 64 0 32 0 .7c-5.3-.5-10.6-.7-16-.7s-10.7 .2-16 .7l0-.7L32 192l0 288 264.2 0c10 12.1 21.7 22.9 34.6 32L32 512 0 512l0-32L0 192l0-32L0 96 0 64l32 0 64 0 0-48L96 0l32 0zM416 96L32 96l0 64 384 0 0-64zm16 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 64l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default CalendarClock;