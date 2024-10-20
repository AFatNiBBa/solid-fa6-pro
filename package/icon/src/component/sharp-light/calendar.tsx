
import { Icon } from "../../index";

/**
 * A component that renders the `calendar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar?s=sharp-light calendar}
 * @preview ![calendar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar.svg)
 */
const Calendar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 16 0 48 192 0 0-48 0-16 32 0 0 16 0 48 64 0 32 0 0 32 0 64 0 32 0 288 0 32-32 0L32 512 0 512l0-32L0 192l0-32L0 96 0 64l32 0 64 0 0-48L96 0l32 0zM416 192L32 192l0 288 384 0 0-288zm0-96L32 96l0 64 384 0 0-64z" />
    </Icon>
);

export default Calendar;