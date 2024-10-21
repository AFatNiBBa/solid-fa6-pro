
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=thin calendar-image}
 * @preview ![calendar-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendar-image.svg)
 */
const CalendarImage: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M120 0c4.4 0 8 3.6 8 8l0 56 192 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 48 0c35.3 0 64 28.7 64 64l0 48 0 16 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-16 0-48C0 92.7 28.7 64 64 64l48 0 0-56c0-4.4 3.6-8 8-8zM432 192L16 192l0 256c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-256zM112 120l0-40L64 80c-26.5 0-48 21.5-48 48l0 48 416 0 0-48c0-26.5-21.5-48-48-48l-48 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40L128 80l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8zM262.8 286.9c-3.2-4.5-9.9-4.4-13 .2l-59.2 85.5c-1.4 2-3.5 3.2-5.9 3.4s-4.7-.6-6.4-2.3L151.7 347c-3.5-3.5-9.3-3-12.2 1l-51 71.3c-3.8 5.3 0 12.6 6.5 12.6l257.5 0c6.5 0 10.3-7.4 6.5-12.7L262.8 286.9zm-26.2-9c9.4-13.6 29.4-13.8 39.1-.5L372 409.9c11.5 15.9 .2 38.1-19.4 38.1L95.1 448c-19.5 0-30.9-22.1-19.5-37.9l51-71.3c8.6-12.1 26-13.5 36.5-3l19.9 19.9L236.6 278zM96 272a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default CalendarImage;