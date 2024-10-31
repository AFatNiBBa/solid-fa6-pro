
import { Icon } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=sharp-thin bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M406.5 416l-20.3-16L112 400l0-29.2L174.2 293l1.8-2.2 0-2.8 0-54-16-12.6 0 63.8L97.8 363 96 365.2l0 2.8 0 40 0 8 8 0 302.5 0zM209.1 76.7l12.7 10C247.5 62.7 282 48 320 48c79.5 0 144 64.5 144 144l0 86 16 12.6 0-5.4 0-93.2c0-85.7-67.4-155.6-152-159.8L328 0 312 0l0 32.2c-39.9 2-76 18.5-102.9 44.5zM272 448l-16 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3l-16 0c0 12.7-5.1 24.9-14.1 33.9s-21.2 14.1-33.9 14.1s-24.9-5.1-33.9-14.1s-14.1-21.2-14.1-33.9zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default BellSlash;