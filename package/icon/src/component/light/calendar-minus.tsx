
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-minus?s=light calendar-minus}
 * @preview ![calendar-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-minus.svg)
 */
const CalendarMinus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L64 64C28.7 64 0 92.7 0 128l0 32 0 32L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-32 0-32c0-35.3-28.7-64-64-64l-32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L128 64l0-48zM32 192l384 0 0 256c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256zM64 96l320 0c17.7 0 32 14.3 32 32l0 32L32 160l0-32c0-17.7 14.3-32 32-32zM304 352c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0z" />
    </Icon>
);

export default CalendarMinus;