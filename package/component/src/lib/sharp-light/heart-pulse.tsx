
import { Icon } from "../../index";

/**
 * A component that renders the `heart-pulse` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=sharp-light heart-pulse}
 * @preview ![heart-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heart-pulse.svg)
 */
const HeartPulse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 141.3l-22.6-22.6L209.1 94.4C189.7 74.9 163.3 64 135.8 64C78.5 64 32 110.5 32 167.8c0 27.5 10.9 53.9 30.4 73.4L77.2 256l2.8 0 54.1 0 35.6-71.2 13.5-27 14.8 26.3 59.2 105.3 49.5-74.3 13.3-20 13.3 20L360.6 256l71.4 0 2.8 0 14.9-14.8c19.5-19.5 30.4-45.9 30.4-73.4C480 110.5 433.5 64 376.2 64c-27.5 0-53.9 10.9-73.4 30.4l-24.2 24.2L256 141.3zM448 288l-16 0-29.2 0L352 288l-8.6 0-4.7-7.1-18.7-28-50.7 76-14.5 21.7-12.8-22.7L184.8 226.1l-26.5 53-4.4 8.8-9.9 0-34.8 0L80 288l-16 0s0 0 0 0L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l1.6 1.6L256 96l22.6-22.6 1.6-1.6c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288s0 0 0 0zM96 320l45.3 0L256 434.8 370.8 320l45.3 0L278.6 457.4 256 480l-22.6-22.6L96 320z" />
    </Icon>
);

export default HeartPulse;