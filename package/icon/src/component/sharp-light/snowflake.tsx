
import { Icon } from "../../index";

/**
 * A component that renders the `snowflake` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake?s=sharp-light snowflake}
 * @preview ![snowflake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/snowflake.svg)
 */
const Snowflake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 16l0-16L208 0l0 16 0 73.4L171.3 52.7 160 41.4 137.4 64l11.3 11.3L208 134.6l0 93.7-81.1-46.8-21.7-81L101 85 70.1 93.3l4.1 15.5 13.4 50.1L17.2 118.1l-16 27.7 70.5 40.7L21.6 200 6.1 204.1 14.4 235l15.5-4.1 81-21.7L192 256l-81.1 46.8-81-21.7L14.4 277 6.1 307.9 21.6 312l50.1 13.4L1.2 366.1l16 27.7 70.5-40.7L74.3 403.3l-4.1 15.5L101 427l4.1-15.5 21.7-81L208 283.7l0 93.7-59.3 59.3L137.4 448 160 470.6l11.3-11.3L208 422.6l0 73.4 0 16 32 0 0-16 0-73.4 36.7 36.7L288 470.6 310.6 448l-11.3-11.3L240 377.4l0-93.7 81.1 46.8 21.7 81L347 427l30.9-8.3-4.1-15.5-13.4-50.1 70.5 40.7 16-27.7-70.5-40.7L426.4 312l15.5-4.1L433.6 277l-15.5 4.1-81 21.7L256 256l81.1-46.8 81 21.7 15.5 4.1 8.3-30.9L426.4 200l-50.1-13.4 70.5-40.7-16-27.7-70.5 40.7 13.4-50.1 4.1-15.5L347 85l-4.1 15.5-21.7 81L240 228.3l0-93.7 59.3-59.3L310.6 64 288 41.4 276.7 52.7 240 89.4 240 16z" />
    </Icon>
);

export default Snowflake;