
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=sharp-light heart-half-stroke}
 * @preview ![heart-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heart-half-stroke.svg)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 125.3l0 293.5L86.6 265.4 62.4 241.2C42.9 221.7 32 195.3 32 167.8C32 110.5 78.5 64 135.8 64c27.5 0 53.9 10.9 73.4 30.4l24.2 24.2 6.6 6.6zm32 293.5l0-293.5 6.6-6.6 24.2-24.2C322.3 74.9 348.7 64 376.2 64C433.5 64 480 110.5 480 167.8c0 27.5-10.9 53.9-30.4 73.4l-24.2 24.2L272 418.8zM256 480l22.6-22.6L448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8l-1.6 1.6L256 96 233.4 73.4l-1.6-1.6c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288 233.4 457.4 256 480z" />
    </Icon>
);

export default HeartHalfStroke;