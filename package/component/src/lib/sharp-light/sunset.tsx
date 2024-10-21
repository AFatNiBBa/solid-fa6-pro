
import { Icon } from "../../index";

/**
 * A component that renders the `sunset` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=sharp-light sunset}
 * @preview ![sunset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sunset.svg)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 230.6l11.3-11.3 96-96L406.6 112 384 89.4l-11.3 11.3L304 169.4 304 16l0-16L272 0l0 16 0 153.4-68.7-68.7L192 89.4 169.4 112l11.3 11.3 96 96L288 230.6zm0 50.5l-77.3-41.6L182 224l-9.4 31.3-25.2 84.1L63.3 364.6 32 374l15.5 28.8L71.9 448l36.3 0L78.8 393.3 156.6 370l16.5-5 5-16.5 23.3-77.8 71.5 38.5 15.2 8.2 15.2-8.2 71.5-38.5L398 348.6l5 16.5 16.5 5 77.8 23.3L467.8 448l36.3 0 24.4-45.3L544 374l-31.3-9.4-84.1-25.2-25.2-84.1L394 224l-28.8 15.5L288 281.1zM412 448c-14.2-55.2-64.3-96-124-96s-109.8 40.8-124 96l33.4 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64l33.4 0zM16 480L0 480l0 32 16 0 544 0 16 0 0-32-16 0L16 480z" />
    </Icon>
);

export default Sunset;