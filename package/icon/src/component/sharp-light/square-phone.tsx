
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=sharp-light square-phone}
 * @preview ![square-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-phone.svg)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm198.8 90.1l32 80 3.9 9.8-7.5 7.5L208.6 238c9.1 13 20.4 24.3 33.4 33.4l18.7-18.7 7.5-7.5 9.8 3.9 80 32 12.1 4.9-2.3 12.9-16 88L349.3 400 336 400l-16 0C187.4 400 80 292.5 80 160l0-16 0-13.4 13.1-2.4 88-16 12.9-2.3 4.9 12.1zM112 160c0 114.9 93.1 208 208 208l2.6 0 11.3-62-58.1-23.2-20.3 20.3-8.7 8.7-10.6-6.1c-25.7-14.8-47.1-36.2-61.9-61.9l-6.1-10.6 8.7-8.7 20.3-20.3L174 146.1l-62 11.3 0 2.6z" />
    </Icon>
);

export default SquarePhone;