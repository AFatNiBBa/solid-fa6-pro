
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filters` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filters?s=duotone filters}
 * @preview ![filters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/filters.svg)
 */
const Filters: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 136c0 9.8 3.6 19.6 10.6 27.1L160 325.5l0 74.5c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-122.5 32-34.8 0-16.7L179 120.7c-6.7-7.3-11.7-15.7-14.9-24.7L40 96c-15.9 0-30.2 9.4-36.6 23.9C1.1 125.1 0 130.6 0 136z" />
        <path d="M195.4 55.9C201.7 41.4 216.1 32 232 32l368 0c15.9 0 30.2 9.4 36.6 23.9s3.6 31.5-7.2 43.2L480 261.5 480 416c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-106.5L202.6 99.1c-10.7-11.7-13.6-28.6-7.2-43.2z" />
    </Icon>
);

export default Filters;