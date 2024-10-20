
import { Icon } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=sharp-thin star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M297.1 17.1L374.6 164l163.6 28.3 19.1 3.3-13.5 13.9L428 328.5l23.7 164.8 2.7 18.7-17.3-7.7L288.1 438.2 139 504.3 121.7 512l2.7-18.7 23.7-164.8L32.4 209.5 18.9 195.6 38 192.3 201.6 164 279 17.1l9-17.1 9 17.1zm74.7 162.6l-7.8-1.3-3.7-7L288.1 34.3 215.7 171.4l-3.7 7-7.8 1.3L51.5 206.2 159.6 317.4 165 323l-1.1 7.8L141.7 485.6l139.9-62.1 6.5-2.9 6.5 2.9 139.9 62.1L412.2 330.8l-1.1-7.8 5.5-5.6L524.6 206.2 371.8 179.7zM296 152l0 8 0 136 0 8-16 0 0-8 0-136 0-8 16 0zM272 336l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default StarExclamation;