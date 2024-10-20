
import { Icon } from "../../index";

/**
 * A component that renders the `raygun` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=solid raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 64l96 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 240c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-.4L188.6 494.3c-7.9 15.8-27.1 22.2-42.9 14.3l-80-40c-15.8-7.9-22.2-27.1-14.3-42.9L120.2 288l-8.2 0C50.1 288 0 237.9 0 176C0 131.3 26.2 92.8 64 74.8l0-50.2C64 11 75 0 88.6 0c4.8 0 9.6 1.4 13.6 4.1L192 64zm200 0c13.3 0 24 10.7 24 24l0 56 60.9 0 77.1-30.9c4.9-2 10.5-1.4 14.9 1.6s7 7.9 7 13.2l0 96c0 5.3-2.6 10.3-7 13.2s-10 3.6-14.9 1.6L476.9 208 416 208l0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM136 176a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Raygun;