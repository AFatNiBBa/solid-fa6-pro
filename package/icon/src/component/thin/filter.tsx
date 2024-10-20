
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=thin filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 69.6C0 48.8 16.8 32 37.6 32l436.8 0C495.2 32 512 48.8 512 69.6c0 8.5-2.9 16.8-8.2 23.5L320 322.8l0 131.1c0 14.4-11.7 26.1-26.1 26.1c-5.5 0-10.9-1.7-15.4-5l-70.1-51c-10.3-7.5-16.5-19.6-16.5-32.3l0-68.9L8.2 93.1C2.9 86.4 0 78.2 0 69.6zM37.6 48C25.7 48 16 57.7 16 69.6c0 4.9 1.7 9.7 4.7 13.5L206.2 315c1.1 1.4 1.8 3.2 1.8 5l0 71.7c0 7.7 3.7 14.9 9.9 19.4l70.1 51c1.7 1.3 3.8 1.9 5.9 1.9c5.6 0 10.1-4.5 10.1-10.1L304 320c0-1.8 .6-3.6 1.8-5L491.3 83.1c3.1-3.8 4.7-8.6 4.7-13.5c0-11.9-9.7-21.6-21.6-21.6L37.6 48z" />
    </Icon>
);

export default Filter;