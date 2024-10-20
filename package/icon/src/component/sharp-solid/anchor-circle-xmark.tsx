
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-circle-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-xmark?s=sharp-solid anchor-circle-xmark}
 * @preview ![anchor-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/anchor-circle-xmark.svg)
 */
const AnchorCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 0 208-128 0 0-96 64 0L96 256 0 352l64 0 0 128 0 32 32 0 192 0 106.8 0c-23.3-16.4-42.5-38.4-55.6-64L320 448l0-79.5 0-.5 0-.5L320 240l32 0 23.2 0c2.8-2.7 5.8-5.3 8.8-7.8l0-56.2-32 0-10.9 0zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L518.6 368l36.7 36.7L566.6 416 544 438.6l-11.3-11.3L496 390.6l-36.7 36.7L448 438.6 425.4 416l11.3-11.3L473.4 368l-36.7-36.7L425.4 320 448 297.4l11.3 11.3L496 345.4l36.7-36.7L544 297.4 566.6 320l-11.3 11.3z" />
    </Icon>
);

export default AnchorCircleXmark;