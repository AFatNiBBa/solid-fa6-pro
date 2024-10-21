
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowflakes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowflakes?s=sharp-duotone-solid snowflakes}
 * @preview ![snowflakes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/snowflakes.svg)
 */
const Snowflakes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M482.2 36.2L510.1 64 482.2 91.8l33.9 33.9L544 97.9l27.8 27.8 33.9-33.9L577.9 64l27.8-27.8L571.8 2.2 544 30.1 516.2 2.2 482.2 36.2zm31 191l17 17L542.1 256l-11.8 11.8-17 17 33.9 33.9 17-17L576 289.9l11.8 11.8 17 17 33.9-33.9-17-17L609.9 256l11.8-11.8 17-17-33.9-33.9-17 17L576 222.1l-11.8-11.8-17-17-33.9 33.9z" />
        <path d="M256 0H192V62.1L166.4 36.5 132.5 70.4 192 129.9v70.6l-61.2-35.3L109 83.9 62.7 96.3l9.4 35-39.9-23L.2 163.7l39.9 23-35 9.4 12.4 46.4 81.3-21.8L160 256 98.8 291.3 17.5 269.5 5.1 315.9l35 9.4L.2 348.3l32 55.4 39.9-23-9.4 35L109 428.1l21.8-81.3L192 311.4v70.6l-59.5 59.5 33.9 33.9L192 449.9V512h64V449.9l25.6 25.6 33.9-33.9L256 382.1V311.4l61.2 35.3L339 428.1l46.4-12.4-9.4-35 39.9 23 32-55.4-39.9-23 35-9.4-12.4-46.4-81.3 21.8L288 256l61.2-35.3 81.3 21.8 12.4-46.4-35-9.4 39.9-23-32-55.4-39.9 23 9.4-35L339 83.9l-21.8 81.3L256 200.6V129.9l59.5-59.5L281.6 36.5 256 62.1V0z" />
    </Icon>
);

export default Snowflakes;