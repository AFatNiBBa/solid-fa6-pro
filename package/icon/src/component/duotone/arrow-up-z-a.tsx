
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-z-a` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-z-a?s=duotone arrow-up-z-a}
 * @preview ![arrow-up-z-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-z-a.svg)
 */
const ArrowUpZA: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 448c0 11.7 6.5 23 17.7 28.6c15.8 7.9 35 1.5 42.9-14.3l7.2-14.3 88.4 0 7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3C521.5 471 528 459.7 528 448c0-4.8-1.1-9.7-3.4-14.3l-16-32-64-128C439.2 262.8 428.1 256 416 256s-23.2 6.8-28.6 17.7l-64 128-16 32c-2.3 4.6-3.4 9.5-3.4 14.3zM320 64c0 17.7 14.3 32 32 32l50.7 0-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0 73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L352 32c-17.7 0-32 14.3-32 32zm75.8 336L416 359.6 436.2 400l-40.4 0z" />
        <path d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3 192 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-301.7L95.6 181.6c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32z" />
    </Icon>
);

export default ArrowUpZA;