
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cards` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards?s=sharp-duotone-solid cards}
 * @preview ![cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cards.svg)
 */
const Cards: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 64l0 50.3c48.3 83.7 96.6 167.4 144.9 251L320 449l0 63 320 0 0-448L320 64zM473.9 187.6c-14-14.5-13.2-38.5 2.5-51.9c13.5-11.7 34.2-9.5 46.7 3.2l5 5.2 4.7-5.2c12.5-12.7 33-15 46.9-3.2c15.5 13.5 16.2 37.5 2.2 51.9l-54 55.8-54.1-55.8z" />
        <path d="M464.9 365.4L210.9 512 0 146.7 254 0 464.9 365.4zM176.8 154.2l-12.6 47.1-20.4 76.1c-7 26 8.5 52.7 34.4 59.7s52.7-8.5 59.7-34.4l2.7-10 17.8 30.8-12.1 7-12.1 7 13.9 24.1 12.1-7 12.1-7 24.1-13.9 12.1-7 12.1-7-13.9-24.1-12.1 7-12.1 7-17.7-30.7 10 2.7c26 7 52.7-8.5 59.7-34.4s-8.5-52.7-34.4-59.7l-76.1-20.4-47.1-12.6z" />
    </Icon>
);

export default Cards;