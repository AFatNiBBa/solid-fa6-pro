
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-fins` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-fins?s=duotone fish-fins}
 * @preview ![fish-fins](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fish-fins.svg)
 */
const FishFins: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 8.3 3.2 16.6 9.5 22.7c10.3 10.2 26.1 12.2 38.7 4.9l93.1-54.3c11.8 12.3 25.4 24.8 40.7 36.3c15.5 11.6 33 22.5 52.4 31.5C264.1 406.9 298.2 416 336 416c5.7 0 11.3-.2 16.8-.6c54.9-4 101.5-27 137.2-53.8c39.2-29.4 67.2-64.7 81.6-89.5c2.9-5 4.3-10.5 4.3-16.1s-1.4-11.1-4.3-16.1c-14.4-24.8-42.5-60.1-81.6-89.5c-35.8-26.8-82.3-49.8-137.2-53.8c-5.5-.4-11.1-.6-16.8-.6c-37.8 0-71.9 9.1-101.7 22.9c-19.4 9-36.9 19.9-52.4 31.5c-15.3 11.5-29 23.9-40.7 36.3L48.1 132.4c-12.5-7.3-28.4-5.3-38.7 4.9S-3 163.3 4.2 175.9L50 256 4.2 336.1C1.4 341.1 0 346.6 0 352zm448-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M238.9 36.9C227.7 44 222 57.3 224.6 70.3l9.7 48.6C264.1 105.1 298.2 96 336 96c5.7 0 11.3 .2 16.8 .6L275.2 38.4c-10.6-8-25-8.5-36.3-1.5zm-4.6 356.2l-9.7 48.6c-2.6 13 3.1 26.3 14.3 33.3s25.6 6.5 36.3-1.5l77.6-58.2c-5.5 .4-11.1 .6-16.8 .6c-37.8 0-71.9-9.1-101.7-22.9z" />
    </Icon>
);

export default FishFins;