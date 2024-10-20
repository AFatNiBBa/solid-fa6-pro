
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress-fairy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-fairy?s=duotone person-dress-fairy}
 * @preview ![person-dress-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-dress-fairy.svg)
 */
const PersonDressFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 48c0 86.7 40.6 163.9 103.7 213.7C78.7 360 64 402.3 64 448c0 17.7 14.3 32 32 32l16 0c55.9 0 106.6-22 144-57.9l0-38.1-21.6 0c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8c.3-1.1 .7-2.2 1-3.3s.8-2.1 1.2-3.2c.9-2.1 1.8-4.1 2.9-6.1c2.1-3.9 4.6-7.6 7.4-11c5.7-6.7 12.7-12.2 20.6-16.2C224.8 85.8 134.7 32 32 32C14.3 32 0 46.3 0 64zM364.2 166.7c15.8 7.8 28 22 33.1 39.8l39.1 136.8c.8 3 1.3 5.9 1.3 8.8c0 17.1-13.9 31.9-32 31.9L384 384l0 38.1C421.4 458 472.1 480 528 480l16 0c17.7 0 32-14.3 32-32c0-45.7-14.7-88-39.7-122.3C599.4 275.9 640 198.7 640 112l0-48c0-17.7-14.3-32-32-32C505.3 32 415.2 85.8 364.2 166.7z" />
        <path d="M256 64a64 64 0 1 1 128 0A64 64 0 1 1 256 64zM242.7 206.4c7.8-27.5 33-46.4 61.5-46.4l31.5 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L384 384l0 80c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-80-21.6 0c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8z" />
    </Icon>
);

export default PersonDressFairy;