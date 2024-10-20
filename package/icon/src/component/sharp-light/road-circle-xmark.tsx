
import { Icon } from "../../index";

/**
 * A component that renders the `road-circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-xmark?s=sharp-light road-circle-xmark}
 * @preview ![road-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/road-circle-xmark.svg)
 */
const RoadCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M184.1 64L74.4 448l264.8 0c5.9 11.4 12.9 22.2 21 32L65.3 480 32 480l9.1-32L160 32l144 0 32 0 144 0 46.5 162.6c-9.9-1.7-20.1-2.6-30.5-2.6c-1.2 0-2.4 0-3.6 0L455.9 64 336 64l0 48 0 16-32 0 0-16 0-48L184.1 64zM326.6 320L304 320l0-16 0-96 0-16 32 0 0 16 0 86.6c-3.8 8.2-6.9 16.7-9.4 25.4zM608 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L518.6 368l36.7 36.7L566.6 416 544 438.6l-11.3-11.3L496 390.6l-36.7 36.7L448 438.6 425.4 416l11.3-11.3L473.4 368l-36.7-36.7L425.4 320 448 297.4l11.3 11.3L496 345.4l36.7-36.7L544 297.4 566.6 320l-11.3 11.3z" />
    </Icon>
);

export default RoadCircleXmark;