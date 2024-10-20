
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-circle-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-plus?s=thin calendar-circle-plus}
 * @preview ![calendar-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-circle-plus.svg)
 */
const CalendarCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L64 64C28.7 64 0 92.7 0 128l0 48 0 16L0 448c0 35.3 28.7 64 64 64l266.8 0c-6.9-4.9-13.5-10.2-19.6-16L64 496c-26.5 0-48-21.5-48-48l0-256 336 0 80 0 16 0 0-16 0-48c0-35.3-28.7-64-64-64l-48 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L128 64l0-56zM112 80l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 192 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 48 0c26.5 0 48 21.5 48 48l0 48L16 176l0-48c0-26.5 21.5-48 48-48l48 0zM304 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM440 296c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 64-64 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0 0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-64 64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0 0-64z" />
    </Icon>
);

export default CalendarCirclePlus;