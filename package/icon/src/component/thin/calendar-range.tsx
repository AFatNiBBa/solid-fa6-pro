
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-range` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-range?s=thin calendar-range}
 * @preview ![calendar-range](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-range.svg)
 */
const CalendarRange: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M120 0c4.4 0 8 3.6 8 8l0 56 192 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 48 0c35.3 0 64 28.7 64 64l0 48 0 16 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-16 0-48C0 92.7 28.7 64 64 64l48 0 0-56c0-4.4 3.6-8 8-8zM432 192L16 192l0 256c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-256zM112 120l0-40L64 80c-26.5 0-48 21.5-48 48l0 48 416 0 0-48c0-26.5-21.5-48-48-48l-48 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40L128 80l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8zM376 280c0 4.4-3.6 8-8 8l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l192 0c4.4 0 8 3.6 8 8zM272 416L80 416c-4.4 0-8-3.6-8-8s3.6-8 8-8l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8zM72 288a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm24 40a40 40 0 1 1 0-80 40 40 0 1 1 0 80zM352 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm40-24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
    </Icon>
);

export default CalendarRange;