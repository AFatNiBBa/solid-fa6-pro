
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-days` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=light calendar-days}
 * @preview ![calendar-days](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-days.svg)
 */
const CalendarDays: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192l-104 0 0 72 104 0 0-72zm0 104l-104 0 0 80 104 0 0-80zm0 112l-104 0 0 72 72 0c17.7 0 32-14.3 32-32l0-40zM280 376l0-80-112 0 0 80 112 0zM168 408l0 72 112 0 0-72-112 0zm-32-32l0-80L32 296l0 80 104 0zM32 408l0 40c0 17.7 14.3 32 32 32l72 0 0-72L32 408zm0-144l104 0 0-72L32 192l0 72zm136 0l112 0 0-72-112 0 0 72zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default CalendarDays;