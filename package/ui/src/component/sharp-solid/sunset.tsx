
import { Icon } from "../../index";

/**
 * A component that renders the `sunset` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=sharp-solid sunset}
 * @preview ![sunset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sunset.svg)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 224l0-1.8-77.5-70.5-23.7-21.5 43.1-47.4 23.7 21.5L256 135.7 256 32l0-32 64 0 0 32 0 103.7 34.5-31.3 23.7-21.5 43 47.4-23.7 21.5L320 222.2l0 1.8-2 0-8.4 7.7L288 251.2l-21.5-19.6L258 224l-2 0zm-74 0l106 73.1L394 224l23.3 126.7L544 374l-40 58-97.3 0c-19-46.9-65-80-118.7-80s-99.7 33.1-118.7 80L72 432 32 374l126.7-23.3L182 224zM0 464l24 0 528 0 24 0 0 48-24 0L24 512 0 512l0-48z" />
    </Icon>
);

export default Sunset;