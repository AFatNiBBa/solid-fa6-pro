
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-xmark?s=sharp-regular calendar-xmark}
 * @preview ![calendar-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-xmark.svg)
 */
const CalendarXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 0l0 24 0 40 144 0 0-40 0-24 48 0 0 24 0 40 104 0 0 80 0 48 0 272 0 48-48 0L48 512 0 512l0-48L0 192l0-48L0 64l104 0 0-40 0-24 48 0zM400 192L48 192l0 272 352 0 0-272zm-95 89l-47 47 47 47 17 17L288 425.9l-17-17-47-47-47 47-17 17L126.1 392l17-17 47-47-47-47-17-17L160 230.1l17 17 47 47 47-47 17-17L321.9 264l-17 17z" />
    </Icon>
);

export default CalendarXmark;