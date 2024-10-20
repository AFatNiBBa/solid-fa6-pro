
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowflake-droplets` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake-droplets?s=duotone snowflake-droplets}
 * @preview ![snowflake-droplets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/snowflake-droplets.svg)
 */
const SnowflakeDroplets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 144c0 11 5.7 21.7 15.9 27.7l25.3 14.8-21.7 5.8c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l67.7-18.1L256.5 256l-60.9 35.5-67.7-18.1c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l21.7 5.8-21.5 12.6 29.3 57 22.7-13.2-5.2 19.3c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l17.7-66.1L288 311.7l0 70.3-49 49c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l15-15 0 30.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-30.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-70.3 61.4 35.8 17.7 66.1c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-5.2-19.3L495 395.1l29.3-57-21.5-12.6 21.7-5.8c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-67.7 18.1L383.5 256l60.9-35.5 67.7 18.1c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-21.7-5.8 25.3-14.8c15.3-8.9 20.4-28.5 11.5-43.8s-28.5-20.4-43.8-11.5l-23.6 13.8 5.2-19.3c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-17.7 66.1L352 200.3l0-70.3 49-49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-15 15L352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 30.1L273 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l49 49 0 70.3-61.4-35.8L208.9 98.4c-3.4-12.8-16.6-20.4-29.4-17s-20.4 16.6-17 29.4l5.2 19.3-23.6-13.8c-15.3-8.9-34.9-3.7-43.8 11.5c-3 5.1-4.4 10.6-4.4 16.1z" />
        <path d="M54.7 325.7L7.1 418.1C2.4 427.2 0 437.4 0 447.7C0 483 28.7 512 64 512s64-29 64-64.3c0-10.2-2.4-20.4-7.1-29.5L73.3 325.7c-1.8-3.5-5.4-5.7-9.3-5.7s-7.5 2.2-9.3 5.7zm512 0l-47.5 92.4c-4.7 9.1-7.1 19.3-7.1 29.5c0 35.3 28.7 64.3 64 64.3s64-29 64-64.3c0-10.2-2.4-20.4-7.1-29.5l-47.5-92.4c-1.8-3.5-5.4-5.7-9.3-5.7s-7.5 2.2-9.3 5.7z" />
    </Icon>
);

export default SnowflakeDroplets;