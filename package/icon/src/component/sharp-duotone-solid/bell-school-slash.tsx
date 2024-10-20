
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-school-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school-slash?s=sharp-duotone-solid bell-school-slash}
 * @preview ![bell-school-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bell-school-slash.svg)
 */
const BellSchoolSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 208c0-19.3 2.6-37.9 7.5-55.6L373 389.9C343.1 406.5 308.7 416 272 416C157.1 416 64 322.9 64 208zM117.7 68.6C155.7 26.5 210.8 0 272 0C386.9 0 480 93.1 480 208c0 42.5-12.8 82-34.6 115c-34-26.4-67.9-52.7-101.8-79.1c5.4-10.8 8.5-23 8.5-35.9c0-44.2-35.8-80-80-80c-20.1 0-38.5 7.4-52.5 19.6c-33.9-26.4-67.9-52.7-101.8-79.1zM128 400c40.1 30.1 90 48 144 48c47 0 90.9-13.5 127.9-36.9L416 423.8l0 40.2 51.1 0c20.3 16 40.6 32 60.9 48l-112 0-32 0-256 0 0-112zM245.6 167.9c7.6-5 16.6-7.9 26.4-7.9c26.5 0 48 21.5 48 48c0 5.5-.9 10.7-2.6 15.6c-23.9-18.6-47.9-37.2-71.8-55.7zM497.2 363.2c8.3-7 19.1-11.2 30.8-11.2c26.5 0 48 21.5 48 48c0 7.4-1.7 14.5-4.7 20.8c-24.7-19.2-49.4-38.4-74.1-57.5z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BellSchoolSlash;