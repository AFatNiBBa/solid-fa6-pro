
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=sharp-light house-circle-xmark}
 * @preview ![house-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-circle-xmark.svg)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 2.7L298.6 12 502.7 192.1c-2.2-.1-4.5-.1-6.7-.1c-12.8 0-25.3 1.4-37.3 4L288 45.3 96 214.7 96 480l112 0 0-176 0-16 16 0 115.2 0c-5.2 10.1-9.4 20.8-12.6 32L240 320l0 160 16 0 104.2 0c10 12.1 21.7 22.9 34.6 32L80 512l-16 0 0-16 0-253L26.6 276 5.4 252l272-240L288 2.7zM608 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L518.6 368l36.7 36.7L566.6 416 544 438.6l-11.3-11.3L496 390.6l-36.7 36.7L448 438.6 425.4 416l11.3-11.3L473.4 368l-36.7-36.7L425.4 320 448 297.4l11.3 11.3L496 345.4l36.7-36.7L544 297.4 566.6 320l-11.3 11.3z" />
    </Icon>
);

export default HouseCircleXmark;