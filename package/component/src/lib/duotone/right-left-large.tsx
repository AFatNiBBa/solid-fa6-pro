
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-left-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left-large?s=duotone right-left-large}
 * @preview ![right-left-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/right-left-large.svg)
 */
const RightLeftLarge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 13.6 5.4 26.7 15 36.3L133.8 491c13.4 13.4 31.6 21 50.6 21c37 0 67.4-28 71.2-64l64.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-8.8 0-16 7.2-16 16l0 40.4c0 4.2-3.4 7.6-7.6 7.6c-2 0-3.9-.8-5.4-2.2L69.3 336 179 226.2c1.4-1.4 3.4-2.2 5.4-2.2c4.2 0 7.6 3.4 7.6 7.6l0 40.4c0 8.8 7.2 16 16 16l112 0 0-64-64.4 0c-3.8-36-34.2-64-71.2-64c-19 0-37.2 7.5-50.6 21L15 299.7C5.4 309.3 0 322.4 0 336z" />
        <path d="M506.2 21C492.8 7.5 474.6 0 455.6 0c-37 0-67.4 28-71.2 64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H432c8.8 0 16-7.2 16-16V71.6c0-4.2 3.4-7.6 7.6-7.6c2 0 3.9 .8 5.4 2.2L570.7 176 461 285.8c-1.4 1.4-3.4 2.2-5.4 2.2c-4.2 0-7.6-3.4-7.6-7.6V240c0-8.8-7.2-16-16-16H320v64h64.4c3.8 36 34.2 64 71.2 64c19 0 37.2-7.5 50.6-21L625 212.3c9.6-9.6 15-22.7 15-36.3s-5.4-26.7-15-36.3L506.2 21z" />
    </Icon>
);

export default RightLeftLarge;