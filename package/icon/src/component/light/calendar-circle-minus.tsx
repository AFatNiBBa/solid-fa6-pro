
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=light calendar-circle-minus}
 * @preview ![calendar-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-circle-minus.svg)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L64 64C28.7 64 0 92.7 0 128l0 32 0 32L0 448c0 35.3 28.7 64 64 64l266.8 0c-12.9-9.1-24.5-19.9-34.6-32L64 480c-17.7 0-32-14.3-32-32l0-256 320 0 64 0 16 0 16 0 0-32 0-32c0-35.3-28.7-64-64-64l-32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L128 64l0-48zM64 96l320 0c17.7 0 32 14.3 32 32l0 32L32 160l0-32c0-17.7 14.3-32 32-32zM432 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm80-144c0-8.8-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default CalendarCircleMinus;