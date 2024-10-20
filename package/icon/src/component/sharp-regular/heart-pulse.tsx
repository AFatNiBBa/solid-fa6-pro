
import { Icon } from "../../index";

/**
 * A component that renders the `heart-pulse` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-pulse?s=sharp-regular heart-pulse}
 * @preview ![heart-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/heart-pulse.svg)
 */
const HeartPulse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 163.9L289.9 130l24.2-24.2C330.6 89.3 353 80 376.2 80c48.5 0 87.8 39.3 87.8 87.8c0 23.3-9.2 45.6-25.7 62.1l-24.2 24.2-1.9 1.9-51.6 0-27.3-40.9-13.3-20-13.3 20-49.5 74.3L197.9 184.2l-14.8-26.3-13.5 27L134.1 256l-34.2 0-1.9-1.9L73.7 229.8C57.2 213.4 48 191.1 48 167.8C48 119.3 87.3 80 135.8 80c23.3 0 45.6 9.2 62.1 25.7L222.1 130 256 163.9zm0 248.2L163.9 320 96 320 222.1 446.1 256 480l33.9-33.9L416 320l-67.9 0L256 412.1zM343.4 288l8.6 0 28.1 0 67.9 0 24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.7c0 0 0 0 0 0L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288l67.9 0 12.1 0 9.9 0 4.4-8.8 26.5-53 57.2 101.7 12.8 22.7 14.5-21.7 50.7-76 18.7 28 4.7 7.1z" />
    </Icon>
);

export default HeartPulse;