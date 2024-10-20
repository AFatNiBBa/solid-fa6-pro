
import { Icon } from "../../index";

/**
 * A component that renders the `tank-water` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tank-water?s=sharp-light tank-water}
 * @preview ![tank-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tank-water.svg)
 */
const TankWater: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32L32 32 0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32-32 0L240 32l9.6 12.8L264 64l152 0 0 288c-20.9 0-41.7-10-58.2-21.2c-14.7-10-25.9-21.5-37.8-34.2c-11.9 12.8-23.1 24.2-37.8 34.2C265.6 342.1 244.9 352 224 352s-41.7-9.9-58.2-21.2c-14.7-10-25.9-21.5-37.8-34.2c-11.9 12.8-23.1 24.2-37.8 34.2C73.6 342.1 52.9 352 32 352L32 64l152 0 14.4-19.2L208 32zM32 384c30.3 0 57.5-14.1 76.2-26.8c7.9-5.4 14.6-10.8 19.8-15.3c5.1 4.5 11.9 9.9 19.8 15.3C166.4 369.9 193.7 384 224 384s57.5-14.1 76.2-26.8c7.9-5.4 14.6-10.8 19.8-15.3c5.1 4.5 11.9 9.9 19.8 15.3C358.5 369.9 385.7 384 416 384l0 64L32 448l0-64zM224 117.3L256 160c5.2 6.9 8 15.3 8 24c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-8.7 2.8-17.1 8-24l32-42.7zM204 90.7l-37.6 50.1C157.1 153.3 152 168.4 152 184c0 39.8 32.2 72 72 72s72-32.2 72-72c0-15.6-5.1-30.7-14.4-43.2L244 90.7 224 64 204 90.7z" />
    </Icon>
);

export default TankWater;