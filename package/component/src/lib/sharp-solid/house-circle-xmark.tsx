
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=sharp-solid house-circle-xmark}
 * @preview ![house-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-circle-xmark.svg)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M520.5 193.7L288.4 0 0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 96.7 0c8.1-89.7 83.5-160 175.3-160c8.3 0 16.5 .6 24.5 1.7zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L518.6 368l36.7 36.7L566.6 416 544 438.6l-11.3-11.3L496 390.6l-36.7 36.7L448 438.6 425.4 416l11.3-11.3L473.4 368l-36.7-36.7L425.4 320 448 297.4l11.3 11.3L496 345.4l36.7-36.7L544 297.4 566.6 320l-11.3 11.3z" />
    </Icon>
);

export default HouseCircleXmark;