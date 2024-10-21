
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-heart?s=sharp-duotone-solid calendar-heart}
 * @preview ![calendar-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/calendar-heart.svg)
 */
const CalendarHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zM112 315.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L224 448.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7z" />
        <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM112 315.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L224 448.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2z" />
    </Icon>
);

export default CalendarHeart;