
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=thin calendar-check}
 * @preview ![calendar-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-check.svg)
 */
const CalendarCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L64 64C28.7 64 0 92.7 0 128l0 48 0 16L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-16 0-48c0-35.3-28.7-64-64-64l-48 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L128 64l0-56zM16 192l416 0 0 256c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-256zM112 80l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 192 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 48 0c26.5 0 48 21.5 48 48l0 48L16 176l0-48c0-26.5 21.5-48 48-48l48 0zM333.7 285.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L208 388.7l-66.3-66.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l72 72c3.1 3.1 8.2 3.1 11.3 0l120-120z" />
    </Icon>
);

export default CalendarCheck;