
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=regular calendar-star}
 * @preview ![calendar-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calendar-star.svg)
 */
const CalendarStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zM233.3 242.9l23.6 47.8 52.7 7.7c8.5 1.2 11.9 11.7 5.8 17.7l-38.2 37.2 9 52.5c1.5 8.5-7.5 15-15.1 11L224 392l-47.2 24.8c-7.6 4-16.5-2.5-15.1-11l9-52.5-38.2-37.2c-6.2-6-2.8-16.5 5.8-17.7l52.7-7.7 23.6-47.8c3.8-7.7 14.8-7.7 18.7 0z" />
    </Icon>
);

export default CalendarStar;