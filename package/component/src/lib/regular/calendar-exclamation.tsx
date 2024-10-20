
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-exclamation` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-exclamation?s=regular calendar-exclamation}
 * @preview ![calendar-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calendar-exclamation.svg)
 */
const CalendarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256zM256 400a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64z" />
    </Icon>
);

export default CalendarExclamation;