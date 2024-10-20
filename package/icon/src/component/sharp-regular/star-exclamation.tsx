
import { Icon } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=sharp-regular star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M315.2 51.4L374.6 164l125.4 21.7 57.3 9.9-40.5 41.7L428 328.5l18.3 127.4 8.1 56.1-51.8-23L288.1 438.2 173.5 489l-51.8 23 8.1-56.1 18.3-127.4L59.4 237.3 18.9 195.6l57.3-9.9L201.6 164 260.9 51.4 288.1 0l27.1 51.4zm51.2 159.8l-23.3-4-11-20.9-44.1-83.5L244 186.4l-11 20.9-23.3 4-93 16.1 65.8 67.7L199 312l-3.4 23.4-14 97.6 87-38.6 19.5-8.6 19.5 8.6 87 38.6-14-97.6L377.2 312l16.4-16.9 65.8-67.7-93-16.1zM312 176l0 24 0 64 0 24-48 0 0-24 0-64 0-24 48 0zM264 320l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default StarExclamation;