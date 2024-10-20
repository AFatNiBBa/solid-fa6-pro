
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=solid calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272zM147.2 360.7c6.5-8.4 19.1-8.3 25.5 .2L184 376l58.3-84.2c6.5-9.4 20.5-9.1 26.7 .5l83.4 131.1c6.8 10.6-.9 24.6-13.5 24.6l-226.4 0c-13.3 0-20.8-15.2-12.7-25.8l47.3-61.5zM128 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CalendarImage;