
import { Icon } from "../../index";

/**
 * A component that renders the `mars-double` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=sharp-regular mars-double}
 * @preview ![mars-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mars-double.svg)
 */
const MarsDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 32l24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-83.7 83.7C338.7 227.2 352 264.1 352 304c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L366.1 80 312 80l-24 0 0-48zM176 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm128 36c14.3-11.2 27.1-24.2 38-38.6c8.4 1.7 17.1 2.6 26 2.6c70.7 0 128-57.3 128-128c0-22.5-5.8-43.6-16-62l0-50 0-24 0-9.9L558.1 80 504 80l-24 0 0-24 0-24 24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-83.7 83.7C530.7 227.2 544 264.1 544 304c0 97.2-78.8 176-176 176c-22.6 0-44.2-4.3-64-12z" />
    </Icon>
);

export default MarsDouble;