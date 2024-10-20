
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-clock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-clock?s=light calendar-clock}
 * @preview ![calendar-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-clock.svg)
 */
const CalendarClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 .7c-5.3-.5-10.6-.7-16-.7s-10.7 .2-16 .7l0-.7L32 192l0 256c0 17.7 14.3 32 32 32l232.2 0c10 12.1 21.7 22.9 34.6 32L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32zm48 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default CalendarClock;