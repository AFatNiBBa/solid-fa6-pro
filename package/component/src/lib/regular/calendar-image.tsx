
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=regular calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256zm99.2 136.7L99.8 390.2c-8.1 10.5-.6 25.8 12.7 25.8l226.4 0c12.6 0 20.3-13.9 13.5-24.6L268.9 260.3c-6.1-9.7-20.1-9.9-26.7-.5L184 344l-11.4-15.1c-6.4-8.5-19-8.5-25.5-.2zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CalendarImage;