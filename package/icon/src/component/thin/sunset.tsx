
import { Icon } from "../../index";

/**
 * A component that renders the `sunset` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=thin sunset}
 * @preview ![sunset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sunset.svg)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.7 221.7c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L280 196.7 280 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 188.7 74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88zm-111.2 3.6c5-2.1 10.7-1.5 15.2 1.6L288 289.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6s8.6 6.6 9.6 11.9L423 345l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6l-7.4 3.1 7.4-3.1c2.1 5 1.5 10.7-1.6 15.2L489.9 464l-19.4 0L528 380.6 414.7 359.8c-3.3-.6-5.8-3.2-6.4-6.4L387.4 240l-94.9 65.4c-2.7 1.9-6.3 1.9-9.1 0L188.6 240 167.8 353.3c-.6 3.3-3.2 5.8-6.4 6.4L48 380.6 105.5 464l-19.4 0L34.8 389.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L153 345l19.8-107.9c1-5.3 4.6-9.8 9.6-11.9zM398.9 464l-16.2 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80l-16.2 0c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96zM8 496l560 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Sunset;