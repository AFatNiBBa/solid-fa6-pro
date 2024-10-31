
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-fairy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-fairy?s=duotone person-fairy}
 * @preview ![person-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-fairy.svg)
 */
const PersonFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 48c0 86.7 40.6 163.9 103.7 213.7C78.7 360 64 402.3 64 448c0 17.7 14.3 32 32 32l16 0c55.9 0 106.6-22 144-57.9l0-73.8c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3c.1-1 .2-2.1 .3-3.1s.3-2 .4-3.1c.3-2 .7-4 1.2-6c.9-3.9 2.2-7.8 3.7-11.4c3-7.4 7.1-14.2 12-20.2c9.9-12.1 23.2-21.2 38.3-26C222.5 84.4 133.4 32 32 32C14.3 32 0 46.3 0 64zm366.1 99.6c30.4 9.4 53.2 36.5 56 69.8l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6l0 73.8C421.4 458 472.1 480 528 480l16 0c17.7 0 32-14.3 32-32c0-45.7-14.7-88-39.7-122.3C599.4 275.9 640 198.7 640 112l0-48c0-17.7-14.3-32-32-32C506.6 32 417.5 84.4 366.1 163.6z" />
        <path d="M256 64a64 64 0 1 1 128 0A64 64 0 1 1 256 64zM217.9 233.4c3.5-41.5 38.1-73.4 79.7-73.4l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L384 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3z" />
    </Icon>
);

export default PersonFairy;