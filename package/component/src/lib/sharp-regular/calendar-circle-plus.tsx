
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-plus?s=sharp-regular calendar-circle-plus}
 * @preview ![calendar-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendar-circle-plus.svg)
 */
const CalendarCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M152 0l0 24 0 40 144 0 0-40 0-24 48 0 0 24 0 40 104 0 0 80 0 48-16 0-32 0-48 0L48 192l0 272 236.5 0c12.3 18.8 28 35.1 46.3 48L48 512 0 512l0-48L0 192l0-48L0 64l104 0 0-40 0-24 48 0zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48z" />
    </Icon>
);

export default CalendarCirclePlus;