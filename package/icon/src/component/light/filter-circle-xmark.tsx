
import { Icon } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=light filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 39.5C0 17.7 17.7 0 39.5 0L472.5 0C494.3 0 512 17.7 512 39.5c0 9.2-3.2 18.1-9.1 25.2L394.2 196.1c-24.4 5.3-47 15.8-66.4 30.1L478.3 44.3c1.1-1.3 1.7-3 1.7-4.8c0-4.2-3.4-7.5-7.5-7.5L39.5 32c-4.2 0-7.5 3.4-7.5 7.5c0 1.8 .6 3.4 1.7 4.8L220.3 269.8c2.4 2.9 3.7 6.5 3.7 10.2l0 88.2 34 26.4c2.7 18.1 8.3 35.3 16.1 51.2c-3.1-1.2-6.1-2.8-8.7-4.9l-61-47.4c-7.8-6.1-12.4-15.4-12.4-25.3l0-82.4L9.1 64.7C3.2 57.6 0 48.7 0 39.5zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L409.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L432 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default FilterCircleXmark;