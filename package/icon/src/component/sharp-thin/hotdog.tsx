
import { Icon } from "../../index";

/**
 * A component that renders the `hotdog` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotdog?s=sharp-thin hotdog}
 * @preview ![hotdog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hotdog.svg)
 */
const Hotdog: typeof Icon = x => (
    <Icon {...x}>
        <path d="M466 232.7L489.4 256 256 489.4 232.7 466l-11.3 11.3 23.3 23.3L256 512l11.3-11.3L500.7 267.3 512 256l-11.3-11.3-23.3-23.3L466 232.7zM11.3 267.3l23.3 23.3L46 279.3 22.6 256 256 22.6 279.3 46l11.3-11.3L267.3 11.3 256 0 244.7 11.3 11.3 244.7 0 256l11.3 11.3zM474.9 138.9l-336 336c-28.1 28.1-73.7 28.1-101.8 0S9 401.2 37.1 373.1l336-336C401.2 9 446.8 9 474.9 37.1s28.1 73.7 0 101.8zm11.3 11.3c34.4-34.4 34.4-90.1 0-124.5s-90.1-34.4-124.4 0l-336 336c-34.4 34.4-34.4 90.1 0 124.4s90.1 34.4 124.5 0l336-336zm-75.7-10.2l-6.5-14.6-7.3 3.2-72 32-2.4 1.1-1.3 2.3L282.2 234l-61.8 30.9-2.2 1.1-1.2 2.2-38.9 70-70 38.9-7 3.9 7.8 14 7-3.9 72-40 2-1.1 1.1-2L229.8 278l61.8-30.9 2.2-1.1 1.2-2.2 38.7-69.7 69.6-30.9 7.3-3.2z" />
    </Icon>
);

export default Hotdog;