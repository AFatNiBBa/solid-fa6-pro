
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-days` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-days?s=thin calendar-days}
 * @preview ![calendar-days](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-days.svg)
 */
const CalendarDays: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L64 64C28.7 64 0 92.7 0 128l0 48 0 16 0 96 0 16 0 96 0 16 0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32 0-16 0-96 0-16 0-96 0-16 0-48c0-35.3-28.7-64-64-64l-48 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56L128 64l0-56zM432 288l-128 0 0-96 128 0 0 96zM288 192l0 96-128 0 0-96 128 0zm-144 0l0 96L16 288l0-96 128 0zM16 304l128 0 0 96L16 400l0-96zm0 112l128 0 0 80-80 0c-26.5 0-48-21.5-48-48l0-32zm144 80l0-80 128 0 0 80-128 0zm144 0l0-80 128 0 0 32c0 26.5-21.5 48-48 48l-80 0zm128-96l-128 0 0-96 128 0 0 96zM112 80l0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 192 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 48 0c26.5 0 48 21.5 48 48l0 48L16 176l0-48c0-26.5 21.5-48 48-48l48 0zM288 400l-128 0 0-96 128 0 0 96z" />
    </Icon>
);

export default CalendarDays;