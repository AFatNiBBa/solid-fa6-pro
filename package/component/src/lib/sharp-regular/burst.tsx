
import { Icon } from "../../index";

/**
 * A component that renders the `burst` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burst?s=sharp-regular burst}
 * @preview ![burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/burst.svg)
 */
const Burst: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312.8 118.8L282.6 55.6 256 0 229.4 55.6 220 75.3l-20.8 43.5L157.8 94.1l-71-42.4L0 0 51.8 86.8l42.4 71 24.7 41.4L75.3 220l-19.7 9.4L0 256l55.6 26.6 63.2 30.2-23.3 66L75 437l58.1-20.5 66-23.3 30.2 63.2L256 512l26.6-55.6 30.2-63.2 66 23.3L437 437l-20.5-58.2-23.3-66 63.2-30.2L512 256l-55.6-26.6-63.2-30.2 23.3-66L437 75 378.9 95.5l-66 23.3zm45.5 34.8l-10.4 29.5-14.4 40.7 38.9 18.6L400.7 256l-28.3 13.5-38.9 18.6 14.4 40.7 10.4 29.5-29.5-10.4-40.7-14.4-18.6 38.9L256 400.7l-13.5-28.3-18.6-38.9-40.7 14.4-29.5 10.4 10.4-29.5 14.4-40.7-38.9-18.6L111.3 256l28.3-13.5L187 219.8l-27-45.2-21.5-36 36 21.5 45.2 27 22.7-47.5L256 111.3l13.5 28.3 18.6 38.9 40.7-14.4 29.5-10.4z" />
    </Icon>
);

export default Burst;