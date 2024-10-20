
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-users` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-users?s=light calendar-users}
 * @preview ![calendar-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-users.svg)
 */
const CalendarUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32-16 0-16 0-384 0-16 0-16 0 0-32 0-32c0-35.3 28.7-64 64-64l32 0 0-48c0-8.8 7.2-16 16-16zm39.4 512c5.4-9.4 8.6-20.3 8.6-32l128 0c0 11.7 3.1 22.6 8.6 32l-145.1 0zM480 96L160 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32zm48 256a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-128a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM480 448c-17.7 0-32 14.3-32 32l160 0c0-17.7-14.3-32-32-32l-96 0zm-64 32c0-35.3 28.7-64 64-64l48 0 48 0c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32zM160 304a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM32 304a80 80 0 1 1 160 0A80 80 0 1 1 32 304zm0 176l160 0c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32zm32-64l48 0 48 0c35.3 0 64 28.7 64 64c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default CalendarUsers;