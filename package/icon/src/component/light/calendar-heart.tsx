
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-heart?s=light calendar-heart}
 * @preview ![calendar-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendar-heart.svg)
 */
const CalendarHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L64 64C28.7 64 0 92.7 0 128l0 32 0 32L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-32 0-32c0-35.3-28.7-64-64-64l-32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L128 64l0-48zM32 192l384 0 0 256c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256zM64 96l320 0c17.7 0 32 14.3 32 32l0 32L32 160l0-32c0-17.7 14.3-32 32-32zm80 205.3c0-16.2 13.1-29.3 29.3-29.3c7.8 0 15.2 3.1 20.7 8.6l18.7 18.7c6.2 6.2 16.4 6.2 22.6 0l18.7-18.7c5.5-5.5 12.9-8.6 20.7-8.6c16.2 0 29.3 13.1 29.3 29.3c0 7.8-3.1 15.2-8.6 20.7L224 393.4l-71.4-71.4c-5.5-5.5-8.6-12.9-8.6-20.7zM173.3 240c-33.8 0-61.3 27.4-61.3 61.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default CalendarHeart;