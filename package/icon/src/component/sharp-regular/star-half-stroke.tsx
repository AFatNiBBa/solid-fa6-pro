
import { Icon } from "../../index";

/**
 * A component that renders the `star-half-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=sharp-regular star-half-stroke}
 * @preview ![star-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star-half-stroke.svg)
 */
const StarHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M315.2 51.4L374.6 164l125.4 21.7 57.3 9.9-40.5 41.7L428 328.5l18.1 125.9 8.3 57.6-52.2-25.7L288.1 430.2 173.9 486.3 121.7 512l8.3-57.6 18.1-125.9L59.4 237.3 18.9 195.6l57.3-9.9L201.6 164 260.9 51.4 288.1 0l27.1 51.4zm-27.1 51.4l0 273.8 21.2 10.4L394 428.8l-13.4-93.4L377.2 312l16.4-16.9 65.8-67.7-93-16.1-23.3-4-11-20.9-44.1-83.5z" />
    </Icon>
);

export default StarHalfStroke;