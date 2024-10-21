
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-day` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-day?s=light calendar-day}
 * @preview ![calendar-day](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-day.svg)
 */
const CalendarDay: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L64 64C28.7 64 0 92.7 0 128l0 32 0 32L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-32 0-32c0-35.3-28.7-64-64-64l-32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L128 64l0-48zM32 192l384 0 0 256c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256zM64 96l320 0c17.7 0 32 14.3 32 32l0 32L32 160l0-32c0-17.7 14.3-32 32-32zm40 160l80 0c4.4 0 8 3.6 8 8l0 80c0 4.4-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8zm-40 8l0 80c0 22.1 17.9 40 40 40l80 0c22.1 0 40-17.9 40-40l0-80c0-22.1-17.9-40-40-40l-80 0c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default CalendarDay;