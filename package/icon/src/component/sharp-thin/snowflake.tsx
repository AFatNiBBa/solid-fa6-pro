
import { Icon } from "../../index";

/**
 * A component that renders the `snowflake` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflake?s=sharp-thin snowflake}
 * @preview ![snowflake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/snowflake.svg)
 */
const Snowflake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 8l0-8L216 0l0 8 0 100.7L165.7 58.3 160 52.7 148.7 64l5.7 5.7L216 131.3l0 110.8-96-55.4L97.4 102.5l-2.1-7.7L79.9 98.9l2.1 7.7 18.4 68.8L20.2 129.1l-6.9-4-8 13.9 6.9 4 80.3 46.3L23.7 207.7l-7.7 2.1 4.1 15.5 7.7-2.1L112 200.6 208 256l-96 55.4L27.8 288.8l-7.7-2.1-4.1 15.5 7.7 2.1 68.8 18.4L12.2 369.1l-6.9 4 8 13.9 6.9-4 80.3-46.3L82 405.4l-2.1 7.7 15.5 4.1 2.1-7.7L120 325.3l96-55.4 0 110.8-61.7 61.7-5.7 5.7L160 459.3l5.7-5.7L216 403.3 216 504l0 8 16 0 0-8 0-100.7 50.3 50.3 5.7 5.7L299.3 448l-5.7-5.7L232 380.7l0-110.8 96 55.4 22.6 84.2 2.1 7.7 15.5-4.1-2.1-7.7-18.4-68.8 80.3 46.3 6.9 4 8-13.9-6.9-4-80.3-46.3 68.8-18.4 7.7-2.1-4.1-15.5-7.7 2.1L336 311.4 240 256l96-55.4 84.2 22.6 7.7 2.1 4.1-15.5-7.7-2.1-68.8-18.4 80.3-46.3 6.9-4-8-13.9-6.9 4-80.3 46.3L366 106.6l2.1-7.7-15.5-4.1-2.1 7.7L328 186.7l-96 55.4 0-110.8 61.7-61.7 5.7-5.7L288 52.7l-5.7 5.7L232 108.7 232 8z" />
    </Icon>
);

export default Snowflake;