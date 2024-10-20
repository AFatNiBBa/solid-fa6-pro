
import { Icon } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=regular filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 41.7C0 18.7 18.7 0 41.7 0L469.9 0C493.2 0 512 18.8 512 42.1c0 8.9-2.8 17.6-8.1 24.8L411.6 193.2c-30.9 3.6-59.3 15.1-83.2 32.5L458.3 48 55 48 218.6 248.8c3.5 4.3 5.4 9.6 5.4 15.2l0 68.4L256.3 358c-.2 3.3-.3 6.6-.3 10c0 20.8 3.6 40.7 10.2 59.2l-75.1-59.6c-9.6-7.6-15.1-19.1-15.1-31.3l0-63.7L9.4 68C3.3 60.6 0 51.3 0 41.7zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z" />
    </Icon>
);

export default FilterCircleXmark;