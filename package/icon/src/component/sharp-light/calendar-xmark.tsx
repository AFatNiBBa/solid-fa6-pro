
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-xmark?s=sharp-light calendar-xmark}
 * @preview ![calendar-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-xmark.svg)
 */
const CalendarXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0-16L96 0l0 16 0 48L32 64 0 64 0 96l0 64 0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-288 0-32 0-64 0-32-32 0-64 0 0-48 0-16L320 0l0 16 0 48L128 64l0-48zM32 192l384 0 0 288L32 480l0-288zm0-96l384 0 0 64L32 160l0-64zM299.3 283.3L310.6 272 288 249.4l-11.3 11.3L224 313.4l-52.7-52.7L160 249.4 137.4 272l11.3 11.3L201.4 336l-52.7 52.7L137.4 400 160 422.6l11.3-11.3L224 358.6l52.7 52.7L288 422.6 310.6 400l-11.3-11.3L246.6 336l52.7-52.7z" />
    </Icon>
);

export default CalendarXmark;