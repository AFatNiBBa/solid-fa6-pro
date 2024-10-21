
import { Icon } from "../../index";

/**
 * A component that renders the `sunset` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=solid sunset}
 * @preview ![sunset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sunset.svg)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M354.5 104.3L320 135.7 320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 103.7-34.5-31.3c-13.1-11.9-33.3-10.9-45.2 2.2s-10.9 33.3 2.2 45.2l88 80c12.2 11.1 30.8 11.1 43.1 0l88-80c13.1-11.9 14-32.1 2.2-45.2s-32.1-14-45.2-2.2zm48.7 132.8c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L288 289.1l-90.3-62.3c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L153 345 45.1 364.9c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L64 432l105.3 0c19-46.9 65-80 118.7-80s99.7 33.1 118.7 80L512 432l29.2-42.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L423 345 403.1 237.1zM0 488c0 13.3 10.7 24 24 24l528 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Sunset;