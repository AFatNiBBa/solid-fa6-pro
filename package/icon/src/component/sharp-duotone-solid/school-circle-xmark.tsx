
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school-circle-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-circle-xmark?s=sharp-duotone-solid school-circle-xmark}
 * @preview ![school-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/school-circle-xmark.svg)
 */
const SchoolCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 512l256 0 0-96c0-35.3 28.7-64 64-64l.7 0c3.4-37.7 18.7-72.1 42.2-99.1C350.2 260 335.6 264 320 264c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88c0 18.3-5.6 35.3-15.1 49.4c29-21 64.6-33.4 103.1-33.4c59.5 0 112.1 29.6 144 74.8L640 96 480 96 320 0 160 96 0 96zm80 96l64 0 0 96-64 0 0-96zm0 128l64 0 0 96-64 0 0-96zM304 128l0 16 0 32 0 16 16 0 32 0 16 0 0-32-16 0-16 0 0-16 0-16-32 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L544 297.4l-11.3 11.3L496 345.4l-36.7-36.7L448 297.4 425.4 320l11.3 11.3L473.4 368l-36.7 36.7L425.4 416 448 438.6l11.3-11.3L496 390.6l36.7 36.7L544 438.6 566.6 416l-11.3-11.3L518.6 368l36.7-36.7L566.6 320z" />
    </Icon>
);

export default SchoolCircleXmark;