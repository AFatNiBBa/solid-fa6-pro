
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-group` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-group?s=duotone people-group}
 * @preview ![people-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/people-group.svg)
 */
const PeopleGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 304c0 44.7 26.2 83.2 64 101.2L64 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-42.8 0-10.7c-20-24.7-32-56.2-32-90.5c0-37.8 14.6-72.2 38.4-97.9c-16.1-9-34.7-14.1-54.4-14.1l-32 0C50.1 192 0 242.1 0 304zm48 0c0-16.2 6-31.1 16-42.3l0 84.7C54 335 48 320.2 48 304zM64 96a64 64 0 1 0 128 0A64 64 0 1 0 64 96zM441.6 206.1C465.4 231.8 480 266.2 480 304c0 34.3-12 65.8-32 90.5l0 10.7 0 42.8c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-42.8c37.8-18 64-56.5 64-101.2c0-61.9-50.1-112-112-112l-32 0c-19.7 0-38.3 5.1-54.4 14.1zM448 96a64 64 0 1 0 128 0A64 64 0 1 0 448 96zM576 261.7c10 11.3 16 26.1 16 42.3s-6 31-16 42.3l0-84.7z" />
        <path d="M384 96A64 64 0 1 0 256 96a64 64 0 1 0 128 0zM256 261.7l0 84.7c-10-11.3-16-26.1-16-42.3s6-31.1 16-42.3zm128 84.7l0-84.7c10 11.3 16 26.1 16 42.3s-6 31-16 42.3zm0 58.9c37.8-18 64-56.5 64-101.2c0-61.9-50.1-112-112-112l-32 0c-61.9 0-112 50.1-112 112c0 44.7 26.2 83.2 64 101.2l0 42.8c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-42.8z" />
    </Icon>
);

export default PeopleGroup;