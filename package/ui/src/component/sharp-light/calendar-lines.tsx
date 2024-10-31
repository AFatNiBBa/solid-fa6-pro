
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-lines` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-lines?s=sharp-light calendar-lines}
 * @preview ![calendar-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-lines.svg)
 */
const CalendarLines: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 16 0 48 192 0 0-48 0-16 32 0 0 16 0 48 64 0 32 0 0 32 0 64 0 32 0 288 0 32-32 0L32 512 0 512l0-32L0 192l0-32L0 96 0 64l32 0 64 0 0-48L96 0l32 0zM416 192L32 192l0 288 384 0 0-288zm0-96L32 96l0 64 384 0 0-64zM96 352l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm16-96l224 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0z" />
    </Icon>
);

export default CalendarLines;