
import { Icon } from "../../index";

/**
 * A component that renders the `square-star` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=sharp-light square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm242.1 98.3l30.8 58.4L338 199.9l38.2 6.6-27 27.8-46 47.4 9.4 65.4 5.5 38.4-34.8-17.1L224 339.2l-59.3 29.1L130 385.4l5.5-38.4 9.4-65.4-46-47.4-27-27.8 38.2-6.6 65.1-11.3 30.8-58.4L224 96l18.1 34.3zm25.4 89.9l-15.5-2.7-7.3-13.9-20.6-39-20.6 39-7.3 13.9-15.5 2.7L137 227.7l30.8 31.7 11 11.3-2.2 15.6L170.3 330l39.6-19.5 14.1-6.9 14.1 6.9L277.7 330l-6.3-43.7-2.2-15.6 11-11.3L311 227.7l-43.5-7.5z" />
    </Icon>
);

export default SquareStar;