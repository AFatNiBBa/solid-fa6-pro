
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-days` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=sharp-regular calendar-days}
 * @preview ![calendar-days](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-days.svg)
 */
const CalendarDays: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M152 24l0-24L104 0l0 24 0 40L0 64l0 80 0 48L0 464l0 48 48 0 352 0 48 0 0-48 0-272 0-48 0-80L344 64l0-40 0-24L296 0l0 24 0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 56-80 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-80 0 0-56 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
    </Icon>
);

export default CalendarDays;