
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cards` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards?s=duotone cards}
 * @preview ![cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cards.svg)
 */
const Cards: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M306.4 472.3c45.7-26.4 91.3-52.7 137-79.1c3.3-1.9 6.4-4.1 9.1-6.6c9.7-8.6 15.9-20.1 17.9-32.4c1-6.1 1-12.5-.1-18.8c-.5-3.1-1.4-6.2-2.5-9.3s-2.5-6-4.2-9c-46.3-80.2-92.6-160.5-139-240.7C334.4 68.7 346.7 64 360 64l224 0c30.9 0 56 25.1 56 56l0 336c0 30.9-25.1 56-56 56l-224 0c-25.3 0-46.6-16.7-53.6-39.7zM473.9 187.6l48.4 49.9c3 3.2 8.2 3.2 11.5 0L582 187.6c14-14.5 13.2-38.5-2.2-51.9c-14-11.7-34.5-9.5-46.9 3.2l-4.7 5.2-5-5.2c-12.5-12.7-33.2-15-46.7-3.2c-15.7 13.5-16.5 37.5-2.5 51.9z" />
        <path d="M27.8 118.8C1.2 134.2-7.9 168.2 7.5 194.9l167 289.3c15.4 26.6 49.4 35.8 76.1 20.4L443.4 393.2c26.6-15.4 35.8-49.4 20.4-76.1L296.8 27.8C281.4 1.2 247.3-7.9 220.7 7.5L27.8 118.8zm143.6 55.5c3-11.1 14.4-17.7 25.6-14.8l26.9 7.2 76.1 20.4c26 7 41.4 33.7 34.4 59.7s-33.7 41.4-59.7 34.4l-8.8-2.4c-.4-.1-.8-.2-1.1-.3l17.7 30.7 12.1-7c6.7-3.8 15.2-1.6 19 5.1s1.6 15.2-5.1 19l-48.2 27.8c-6.7 3.8-15.2 1.6-19-5.1s-1.6-15.2 5.1-19l12.1-7-17.7-30.7c-.1 .4-.2 .7-.3 1.1l-2.4 8.8c-7 26-33.7 41.4-59.7 34.4s-41.4-33.7-34.4-59.7l20.4-76.1 7.2-26.9z" />
    </Icon>
);

export default Cards;