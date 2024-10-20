
import { Icon } from "../../index";

/**
 * A component that renders the `filter-circle-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-circle-xmark?s=thin filter-circle-xmark}
 * @preview ![filter-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/filter-circle-xmark.svg)
 */
const FilterCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 37.6C0 16.8 16.8 0 37.6 0L474.4 0C495.2 0 512 16.8 512 37.6c0 8.5-2.9 16.8-8.2 23.5L396.1 195.7c-9.2 1.9-18.1 4.5-26.7 7.8L491.3 51.1c3.1-3.8 4.7-8.6 4.7-13.5c0-11.9-9.7-21.6-21.6-21.6L37.6 16C25.7 16 16 25.7 16 37.6c0 4.9 1.7 9.7 4.7 13.5L206.2 283c1.1 1.4 1.8 3.2 1.8 5l0 71.7c0 7.7 3.7 14.9 9.9 19.4l43.3 31.5c2.2 9 5.2 17.7 8.7 26.1l-61.5-44.7c-10.3-7.5-16.5-19.6-16.5-32.3l0-68.9L8.2 61.1C2.9 54.4 0 46.2 0 37.6zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm205.7-50.3L443.3 368l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L432 379.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L420.7 368l-50.3-50.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L432 356.7l50.3-50.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default FilterCircleXmark;