
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mosque` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mosque?s=duotone mosque}
 * @preview ![mosque](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mosque.svg)
 */
const Mosque: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 126l0 34 160 0 0-34c0-42.8-20.2-83.1-54.4-108.8l-16-12C83.9 .9 76.1 .9 70.4 5.2l-16 12C20.2 42.9 0 83.2 0 126zm192 88.6c0 28.6 11.3 54.5 29.8 73.4l356.4 0c18.4-19 29.8-44.9 29.8-73.4c0-34.4-16.7-66.9-45.7-86.1c-5.4-3.6-10.8-7.1-16-10.6C490.9 81.3 447.5 52.7 412.8 6.4C409.8 2.4 405 0 400 0s-9.8 2.4-12.8 6.4c-34.7 46.3-78.1 74.9-133.5 111.5c-5.2 3.5-10.6 7-16 10.6c-28.9 19.2-45.7 51.7-45.7 86.1z" />
        <path d="M160 160l0 104.6c-19.1 11.1-32 31.7-32 55.4l0 160c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2l-64 0c-26.5 0-48-21.5-48-48L0 176l0-16 160 0zM352 512l-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-48 0c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32l416 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32l-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-58c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454l0 58z" />
    </Icon>
);

export default Mosque;