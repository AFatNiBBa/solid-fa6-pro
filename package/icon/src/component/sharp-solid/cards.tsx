
import { Icon } from "../../index";

/**
 * A component that renders the `cards` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards?s=sharp-solid cards}
 * @preview ![cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cards.svg)
 */
const Cards: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M210.9 512l254-146.7L254 0 0 146.7 210.9 512zm12.9-345.2l76.1 20.4c26 7 41.4 33.7 34.4 59.7s-33.7 41.4-59.7 34.4l-10-2.7 17.7 30.7 12.1-7 12.1-7 13.9 24.1-12.1 7-12.1 7-24.1 13.9-12.1 7-12.1 7-13.9-24.1 12.1-7 12.1-7-17.8-30.7-2.7 10c-7 26-33.7 41.4-59.7 34.4s-41.4-33.7-34.4-59.7l20.4-76.1 12.6-47.1 47.1 12.6zM320 512l320 0 0-448L327.9 64 492.7 349.4l16 27.7-27.7 16L320 486l0 26zM476.4 135.7c13.5-11.7 34.2-9.5 46.7 3.2l5 5.2 4.7-5.2c12.5-12.7 33-15 46.9-3.2c15.5 13.5 16.2 37.5 2.2 51.9l-54 55.8-54.1-55.8c-14-14.5-13.2-38.5 2.5-51.9z" />
    </Icon>
);

export default Cards;