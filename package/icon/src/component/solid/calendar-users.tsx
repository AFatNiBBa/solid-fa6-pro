
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-users` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-users?s=solid calendar-users}
 * @preview ![calendar-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/calendar-users.svg)
 */
const CalendarUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 32l0 32-48 0c-26.5 0-48 21.5-48 48l0 48 32 0 384 0 32 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L256 64l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm55.4 480l145.1 0c-5.4-9.4-8.6-20.3-8.6-32c0-43.8 29.4-80.8 69.6-92.3c-23-20.5-37.6-50.4-37.6-83.7c0-56.4 41.7-103.1 96-110.9l0-1.1-384 0 0 1.1c54.3 7.8 96 54.4 96 110.9c0 33.3-14.5 63.2-37.6 83.7C226.6 399.2 256 436.2 256 480c0 11.7-3.1 22.6-8.6 32zM528 384a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm-48 32c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-96 0zM192 304A80 80 0 1 0 32 304a80 80 0 1 0 160 0zM0 480c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-96 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default CalendarUsers;