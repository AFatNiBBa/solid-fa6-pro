
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=sharp-regular calendar-circle-minus}
 * @preview ![calendar-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-circle-minus.svg)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M152 0l0 24 0 40 144 0 0-40 0-24 48 0 0 24 0 40 104 0 0 80 0 48-16 0-32 0-48 0L48 192l0 272 236.5 0c12.3 18.8 28 35.1 46.3 48L48 512 0 512l0-48L0 192l0-48L0 64l104 0 0-40 0-24 48 0zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm224 16l0-32-16 0-128 0-16 0 0 32 16 0 128 0 16 0z" />
    </Icon>
);

export default CalendarCircleMinus;