
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowflake-droplets` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake-droplets?s=sharp-duotone-solid snowflake-droplets}
 * @preview ![snowflake-droplets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/snowflake-droplets.svg)
 */
const SnowflakeDroplets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96.2 163.7l27.7 16 12.2 7-11.8 3.2-23.2 6.2 12.4 46.4 23.2-6.2 58.2-15.6L256 256l-61.2 35.3-58.2-15.6-23.2-6.2-11.3 42.3 2.6 5.1 19.5 5.2 11.8 3.2-12.2 7-8.6 5 29.3 57 11.3-6.5 12.2-7-3.2 11.8-6.2 23.2L205 428.1l6.2-23.2 15.6-58.2L288 311.4l0 70.6-42.6 42.6-17 17 33.9 33.9 17-17 8.6-8.6 0 30.1 0 32 64 0 0-32 0-30.1 8.6 8.6 17 17 33.9-33.9-17-17L352 382.1l0-70.6 61.2 35.3 15.6 58.2 6.2 23.2 46.4-12.4-6.2-23.2L472 380.7l12.2 7 11.3 6.5 29.3-57-8.6-5-12.2-7 11.8-3.2 19.5-5.2 2.6-5.1-11.3-42.3-23.2 6.2-58.2 15.6L384 256l61.2-35.3 58.2 15.6 23.2 6.2 12.4-46.4-23.2-6.2L504 186.7l12.2-7 27.7-16-32-55.4-27.7 16-12.2 7 3.2-11.8 6.2-23.2L435 83.9l-6.2 23.2-15.6 58.2L352 200.6l0-70.6 42.6-42.6 17-17L377.6 36.5l-17 17L352 62.1 352 32l0-32L288 0l0 32 0 30.1-8.6-8.6-17-17L228.5 70.4l17 17L288 129.9l0 70.6-61.2-35.3-15.6-58.2L205 83.9 158.7 96.3l6.2 23.2 3.2 11.8-12.2-7-27.7-16-32 55.4z" />
        <path d="M64 320L8.3 417.4C2.9 427 0 437.8 0 448.8C0 483.7 28.3 512 63.2 512l1.6 0c34.9 0 63.2-28.3 63.2-63.2c0-11-2.9-21.8-8.3-31.4L64 320zm512 0l-55.7 97.4c-5.5 9.6-8.3 20.4-8.3 31.4c0 34.9 28.3 63.2 63.2 63.2l1.6 0c34.9 0 63.2-28.3 63.2-63.2c0-11-2.9-21.8-8.3-31.4L576 320z" />
    </Icon>
);

export default SnowflakeDroplets;