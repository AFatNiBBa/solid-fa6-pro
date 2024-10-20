
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-minus?s=sharp-thin calendar-circle-minus}
 * @preview ![calendar-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-circle-minus.svg)
 */
const CalendarCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 8l0-8L112 0l0 8 0 56L16 64 0 64 0 80l0 96 0 16L0 496l0 16 16 0 314.8 0c-6.9-4.9-13.5-10.2-19.6-16L16 496l0-304 336 0 80 0 16 0 0-16 0-96 0-16-16 0-96 0 0-56 0-8L320 0l0 8 0 56L128 64l0-56zM112 80l0 40 0 8 16 0 0-8 0-40 192 0 0 40 0 8 16 0 0-8 0-40 96 0 0 96L16 176l0-96 96 0zM432 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm80-136l0-16-8 0-144 0-8 0 0 16 8 0 144 0 8 0z" />
    </Icon>
);

export default CalendarCircleMinus;