
import { Icon } from "../../index";

/**
 * A component that renders the `road-circle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-xmark?s=sharp-solid road-circle-xmark}
 * @preview ![road-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/road-circle-xmark.svg)
 */
const RoadCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 32l128 0 0 64 0 32 64 0 0-32 0-64 128 0 46.5 162.6c-9.9-1.7-20.1-2.6-30.5-2.6c-59.5 0-112.1 29.6-144 74.8l0-42.8 0-32-64 0 0 32 0 64 0 32 38.6 0c-4.3 15.3-6.6 31.4-6.6 48c0 5.4 .2 10.7 .7 16L288 384l0 32 0 64L32 480 160 32zM496 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3L566.6 320 544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7z" />
    </Icon>
);

export default RoadCircleXmark;