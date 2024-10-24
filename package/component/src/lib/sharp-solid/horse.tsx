
import { Icon } from "../../index";

/**
 * A component that renders the `horse` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horse?s=sharp-solid horse}
 * @preview ![horse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/horse.svg)
 */
const Horse: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 238.1l0-78.1 16 0 32 64 80-32 0-128L544 32l16 0 16 0 0-32L560 0 480 0 448 0C377.3 0 320 57.3 320 128l-64 0-52.8 0-54.4 0c-30.7 0-57.6 16.3-72.5 40.8C33.2 174.5 0 211.4 0 256l0 56 0 24 48 0 0-24 0-56c0-13.4 6.6-25.2 16.7-32.5c1.6 13 6.3 25.4 13.6 36.4l42.4 63.6L94.1 350.1l-21 21 9.4 28.1L120.1 512l101.2 0L182.9 397l27-27L224 355.9l0-19.9 0-16 83.7 23.9c4.1 1.2 8.2 2.1 12.3 2.8L320 512l96 0 0-196.3c19.2-19.2 31.5-45.7 32-75.7c0 0 0 0 0 0l0-1.9zM496 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Horse;