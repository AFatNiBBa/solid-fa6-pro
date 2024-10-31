
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=duotone box-open-full}
 * @preview ![box-open-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-open-full.svg)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M13.8 267.8c0-4.8 1.1-9.7 3.4-14.3l41.7-83.4c3-6.1 9.6-9.6 16.3-8.7L320 192c-27.8 46.3-55.6 92.6-83.4 138.9c-7.4 12.4-22.3 18.3-36.2 14.3L64 306.3c-9-2.6-18-5.1-26.9-7.7c-14.3-4.1-23.2-17.1-23.2-30.8zM320 192l244.8-30.6c.7-.1 1.3-.1 2-.1c6 0 11.6 3.4 14.3 8.8l41.7 83.4c9 17.9-.6 39.6-19.8 45.1c-9 2.6-18 5.1-26.9 7.7c-45.5 13-90.9 26-136.4 39c-13.9 4-28.8-1.9-36.2-14.3C375.6 284.6 347.8 238.3 320 192z" />
        <path d="M480.9 3.1c24.8 9.3 37.4 37 28.1 61.8l-27.5 73.4L320 158.5l-7.2-.9c4.6-8.8 7.2-18.9 7.2-29.6c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.1 .6 10 1.7 14.7l-65.5-8.2c-.1-2.2-.2-4.3-.2-6.5C128 57.3 185.3 0 256 0c69.6 0 126.2 55.6 128 124.7l35.1-93.6c9.3-24.8 37-37.4 61.8-28.1zM236.6 330.9L320 192l83.4 139c7.4 12.4 22.3 18.3 36.2 14.3l136.4-39 0 104.2c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 451.7 64 432.5 64 410.5l0-104.2 136.4 39c13.9 4 28.8-1.9 36.2-14.3z" />
    </Icon>
);

export default BoxOpenFull;