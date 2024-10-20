
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars-and-venus-burst` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus-burst?s=duotone mars-and-venus-burst}
 * @preview ![mars-and-venus-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mars-and-venus-burst.svg)
 */
const MarsAndVenusBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4 219.6c0 1.2 .1 2.4 .4 3.6c1.5 6.4 6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-1.9-26.4C247.1 277.9 240 251.8 240 224c0-1.8 0-3.6 .1-5.4s.1-3.6 .3-5.4c.2-3.6 .6-7.1 1.1-10.6c.9-7 2.3-13.8 4.1-20.5c3.6-13.3 8.9-26 15.6-37.7c13.4-23.4 32.6-43.1 55.7-57.2c.9-4.5-.2-9.3-3.2-13c-4.1-5.1-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-4.4 3-6.9 8-6.9 13.2z" />
        <path d="M481.8 14.8C485.5 5.8 494.3 0 504 0L616 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C551 163.3 560 192.6 560 224c0 80.2-59 146.6-136 158.2l0 25.8 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-25.8c-77-11.6-136-78-136-158.2c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L526.1 80 487 41c-6.9-6.9-8.9-17.2-5.2-26.2zM592 48s0 0 0 0s0 0 0 0s0 0 0 0zM496 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default MarsAndVenusBurst;