
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-biking-mountain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking-mountain?s=sharp-duotone-solid person-biking-mountain}
 * @preview ![person-biking-mountain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-biking-mountain.svg)
 */
const PersonBikingMountain: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64 20.6 0c2.2 7.4 5.2 14.6 8.8 21.3L14.9 451.9l45.3 45.3 14.6-14.6c6.7 3.6 13.8 6.6 21.3 8.8L96 512l64 0 0-20.6c7.4-2.2 14.6-5.2 21.3-8.8l14.6 14.6 45.3-45.3-14.6-14.6c3.6-6.7 6.6-13.8 8.8-21.3l20.6 0 0-64-20.6 0c-2.2-7.4-5.2-14.6-8.8-21.3l14.6-14.6-45.3-45.3-14.6 14.6c-6.7-3.6-13.8-6.6-21.3-8.8l0-20.6-64 0 0 20.6c-7.4 2.2-14.6 5.2-21.3 8.8L60.1 270.9 14.9 316.1l14.6 14.6c-3.6 6.7-6.6 13.8-8.8 21.3L0 352zm192 32A64 64 0 1 1 64 384a64 64 0 1 1 128 0zm192-32l0 64 20.6 0c2.2 7.4 5.2 14.6 8.8 21.3l-14.6 14.6 45.3 45.3 14.6-14.6c6.7 3.6 13.8 6.6 21.3 8.8l0 20.6 64 0 0-20.6c7.4-2.2 14.6-5.2 21.3-8.8l14.6 14.6 45.3-45.3-14.6-14.6c3.6-6.7 6.6-13.8 8.8-21.3l20.6 0 0-64-20.6 0c-2.2-7.4-5.2-14.6-8.8-21.3l14.6-14.6-45.3-45.3-14.6 14.6c-6.7-3.6-13.8-6.6-21.3-8.8l0-20.6-64 0 0 20.6c-7.4 2.2-14.6 5.2-21.3 8.8l-14.6-14.6-45.3 45.3 14.6 14.6c-3.6 6.7-6.6 13.8-8.8 21.3L384 352zm192 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M448 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM427.2 160L336 88 223.2 175.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1 288 448l64 0 0-177.1-57-38 60.3-48.5L404.8 224 512 224l0-64-84.8 0zM176 176L304 80 256 20l-42.7 0L112 96l64 80z" />
    </Icon>
);

export default PersonBikingMountain;