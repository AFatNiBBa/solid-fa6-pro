
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-heart?s=sharp-thin calendar-heart}
 * @preview ![calendar-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/calendar-heart.svg)
 */
const CalendarHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 8l0-8L112 0l0 8 0 56L16 64 0 64 0 80l0 96 0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-304 0-16 0-96 0-16-16 0-96 0 0-56 0-8L320 0l0 8 0 56L128 64l0-56zM16 192l416 0 0 304L16 496l0-304zM112 80l0 40 0 8 16 0 0-8 0-40 192 0 0 40 0 8 16 0 0-8 0-40 96 0 0 96L16 176l0-96 96 0zM216.3 265.2c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L224 440.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4zm-3.4 18.9L224 294.8l11.1-10.7 7.7-7.4c8.5-8.2 19.8-12.7 31.6-12.7l2.4 0c23.9 0 43.2 19.3 43.2 43.2c0 11.7-4.8 23-13.2 31.1L224 417.9l-82.8-79.6c-8.5-8.1-13.2-19.4-13.2-31.1c0-23.9 19.3-43.2 43.2-43.2l2.4 0c11.8 0 23.1 4.6 31.6 12.7l7.7 7.4z" />
    </Icon>
);

export default CalendarHeart;