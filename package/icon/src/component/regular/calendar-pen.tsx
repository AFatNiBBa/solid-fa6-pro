
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=regular calendar-pen}
 * @preview ![calendar-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calendar-pen.svg)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zm-91.2 51c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9L240.6 258 255.5 243c14.7-14.7 38.6-14.7 53.3 0zM146.1 352.5L218 280.6l53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.6c1.4-5.6 4.3-10.8 8.4-14.9z" />
    </Icon>
);

export default CalendarPen;