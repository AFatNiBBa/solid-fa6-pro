
import { Icon } from "../../index";

/**
 * A component that renders the `rotate` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=sharp-thin rotate}
 * @preview ![rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rotate.svg)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M118.1 79.5c-47.4 37-75.8 89.3-83.8 144.5l16.2 0c7.8-50.4 34.1-98 77.5-131.9c81.9-64 196.6-57 270.1 11.9l-47.7 47.7L339 163l11.3 11.3L368 192l112 0 16 0 0-16 0-112L478.3 46.3 467 35 455.7 46.3 409.4 92.7c-79.1-74.5-203-82.2-291.3-13.2zM467 57.7l13 13L480 176l-105.4 0-13-13L467 57.7zM45 477l11.3-11.3 45.8-45.8c79.2 74 202.6 81.5 290.7 12.7c47.4-37 75.8-89.3 83.8-144.5l-16.2 0c-7.8 50.4-34.1 98-77.5 131.9c-81.6 63.8-196 57-269.5-11.4l48.2-48.2L173 349l-11.3-11.3L144 320 32 320l-16 0 0 16 0 112 17.7 17.7L45 477zm0-22.6l-13-13L32 336l105.4 0 13 13L45 454.3z" />
    </Icon>
);

export default Rotate;