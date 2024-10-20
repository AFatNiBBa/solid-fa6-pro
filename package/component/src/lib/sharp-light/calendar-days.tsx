
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-days` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=sharp-light calendar-days}
 * @preview ![calendar-days](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendar-days.svg)
 */
const CalendarDays: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 16 0 48 192 0 0-48 0-16 32 0 0 16 0 48 64 0 32 0 0 32 0 64 0 32 0 288 0 32-32 0L32 512 0 512l0-32L0 192l0-32L0 96 0 64l32 0 64 0 0-48L96 0l32 0zM416 192l-104 0 0 72 104 0 0-72zm0 104l-104 0 0 80 104 0 0-80zm0 112l-104 0 0 72 104 0 0-72zM280 376l0-80-112 0 0 80 112 0zM168 408l0 72 112 0 0-72-112 0zm-32-32l0-80L32 296l0 80 104 0zM32 408l0 72 104 0 0-72L32 408zm0-144l104 0 0-72L32 192l0 72zm136 0l112 0 0-72-112 0 0 72zM416 96L32 96l0 64 384 0 0-64z" />
    </Icon>
);

export default CalendarDays;