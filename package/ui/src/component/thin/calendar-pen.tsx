
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-pen?s=thin calendar-pen}
 * @preview ![calendar-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-pen.svg)
 */
const CalendarPen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L64 64C28.7 64 0 92.7 0 128l0 48 0 16L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-16 0-48c0-35.3-28.7-64-64-64l-48 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L128 64l0-56zM16 192l416 0 0 256c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-256zM112 80l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 192 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 48 0c26.5 0 48 21.5 48 48l0 48L16 176l0-48c0-26.5 21.5-48 48-48l48 0zM301.3 252.3l6.4 6.4c9.4 9.4 9.4 24.6 0 33.9l-17.9 17.9-40.4-40.4 17.9-17.9c9.4-9.4 24.6-9.4 33.9 0zm-157 123l93.9-93.9 40.4 40.4-93.9 93.9c-1.1 1.1-2.4 1.8-3.9 2.1l-50.2 11.5 11.5-50.2c.3-1.5 1.1-2.8 2.1-3.9zM256 241L133 364c-3.2 3.2-5.4 7.2-6.4 11.6l-11.5 50.2c-2.6 11.5 7.7 21.8 19.2 19.2l50.2-11.5c4.4-1 8.4-3.2 11.6-6.4L319 304c15.6-15.6 15.6-40.9 0-56.6l-6.4-6.4c-15.6-15.6-40.9-15.6-56.6 0z" />
    </Icon>
);

export default CalendarPen;