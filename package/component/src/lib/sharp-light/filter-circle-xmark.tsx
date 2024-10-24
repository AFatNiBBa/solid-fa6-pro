
import { Icon } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=sharp-light filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 276.2l0 11.8 0 65.5L256.5 382c1.5 19 6 37.1 13 53.9L192 368l0-80L0 64 0 32 0 0 32 0 480 0l32 0 0 32 0 32L399.8 194.9c-23.4 4.3-45.2 13.3-64.3 25.9L480 52.2 480 32 32 32l0 20.2 184.3 215 7.7 9zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L454.6 368l36.7 36.7L502.6 416 480 438.6l-11.3-11.3L432 390.6l-36.7 36.7L384 438.6 361.4 416l11.3-11.3L409.4 368l-36.7-36.7L361.4 320 384 297.4l11.3 11.3L432 345.4l36.7-36.7L480 297.4 502.6 320l-11.3 11.3z" />
    </Icon>
);

export default FilterCircleXmark;