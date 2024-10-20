
import { Icon } from "../../index";

/**
 * A component that renders the `snowflake` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake?s=sharp-regular snowflake}
 * @preview ![snowflake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/snowflake.svg)
 */
const Snowflake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 24l0-24L200 0l0 24 0 46.1L183.4 53.4l-17-17L132.5 70.4l17 17L200 137.9l0 76.5-66.2-38.2-18.5-69.1L109 83.9 62.7 96.3l6.2 23.2L75 142.2l-26-15-20.8-12-24 41.6 20.8 12 26 15-22.7 6.1L5.1 196.1l12.4 46.4 23.2-6.2 69.1-18.5L176 256l-66.2 38.2L40.7 275.7l-23.2-6.2L5.1 315.9l23.2 6.2L51 328.2l-26 15-20.8 12 24 41.6 20.8-12 26-15-6.1 22.7-6.2 23.2L109 428.1l6.2-23.2 18.5-69.1L200 297.6l0 76.5-50.6 50.6-17 17 33.9 33.9 17-17L200 441.9l0 46.1 0 24 48 0 0-24 0-46.1 16.6 16.6 17 17 33.9-33.9-17-17L248 374.1l0-76.5 66.2 38.2 18.5 69.1 6.2 23.2 46.4-12.4-6.2-23.2L373 369.8l26 15 20.8 12 24-41.6-20.8-12-26-15 22.7-6.1 23.2-6.2-12.4-46.4-23.2 6.2-69.1 18.5L272 256l66.2-38.2 69.1 18.5 23.2 6.2 12.4-46.4-23.2-6.2L397 183.8l26-15 20.8-12-24-41.6-20.8 12-26 15 6.1-22.7 6.2-23.2L339 83.9l-6.2 23.2-18.5 69.1L248 214.4l0-76.5 50.6-50.6 17-17L281.6 36.5l-17 17L248 70.1 248 24z" />
    </Icon>
);

export default Snowflake;