
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=sharp-light calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-288 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 192l384 0 0 288L32 480l0-288zm0-96l384 0 0 64L32 160l0-64zM238.4 240.9L224 211.7l-14.4 29.2-23.5 47.7-52.5 7.7-32 4.7 23.1 22.6 38 37.2-9 52.5-5.5 32 28.7-15.1L224 405.4l46.9 24.8 28.7 15.1-5.5-32-9-52.5 38-37.2L346.3 301l-32-4.7-52.5-7.7-23.5-47.7zm-27.2 69.4L224 284.3l12.8 26.1 3.7 7.6 8.3 1.2 28.8 4.2-20.9 20.4-6 5.9 1.4 8.3 4.9 28.8-25.7-13.6-7.5-3.9-7.5 3.9-25.7 13.6 4.9-28.8 1.4-8.3-6-5.9-20.9-20.4 28.8-4.2 8.3-1.2 3.7-7.6z" />
    </Icon>
);

export default CalendarStar;