
import { Icon } from "../../index";

/**
 * A component that renders the `snowflake` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake?s=sharp-solid snowflake}
 * @preview ![snowflake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/snowflake.svg)
 */
const Snowflake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 32l0-32L192 0l0 32 0 30.1-8.6-8.6-17-17L132.5 70.4l17 17L192 129.9l0 70.6-61.2-35.3-15.6-58.2L109 83.9 62.7 96.3l6.2 23.2L72 131.3l-12.2-7-27.7-16L.2 163.7l27.7 16 12.2 7-11.8 3.2L5.1 196.1l12.4 46.4 23.2-6.2 58.2-15.6L160 256 98.8 291.3 40.7 275.7l-23.2-6.2L5.1 315.9l23.2 6.2L40 325.3l-12.2 7L.2 348.3l32 55.4 27.7-16 12.2-7-3.2 11.8-6.2 23.2L109 428.1l6.2-23.2 15.6-58.2L192 311.4l0 70.6-42.6 42.6-17 17 33.9 33.9 17-17 8.6-8.6 0 30.1 0 32 64 0 0-32 0-30.1 8.6 8.6 17 17 33.9-33.9-17-17L256 382.1l0-70.6 61.2 35.3 15.6 58.2 6.2 23.2 46.4-12.4-6.2-23.2L376 380.7l12.2 7 27.7 16 32-55.4-27.7-16-12.2-7 11.8-3.2 23.2-6.2-12.4-46.4-23.2 6.2-58.2 15.6L288 256l61.2-35.3 58.2 15.6 23.2 6.2 12.4-46.4-23.2-6.2L408 186.7l12.2-7 27.7-16-32-55.4-27.7 16-12.2 7 3.2-11.8 6.2-23.2L339 83.9l-6.2 23.2-15.6 58.2L256 200.6l0-70.6 42.6-42.6 17-17L281.6 36.5l-17 17L256 62.1 256 32z" />
    </Icon>
);

export default Snowflake;