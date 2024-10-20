
import { Icon } from "../../index";

/**
 * A component that renders the `sunrise` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunrise?s=sharp-thin sunrise}
 * @preview ![sunrise](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sunrise.svg)
 */
const Sunrise: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 4.7l-5.7 5.7-88 88-5.7 5.7L200 115.3l5.7-5.7L280 35.3 280 216l0 8 16 0 0-8 0-180.7 74.3 74.3 5.7 5.7L387.3 104l-5.7-5.7-88-88L288 4.7zm0 276.4l-91.7-49.4L182 224l-4.7 15.6-29.9 99.7L47.6 369.3 32 374l7.7 14.4L80.5 464l18.2 0L55.4 383.6l96.6-29 8.3-2.5 2.5-8.3 29-96.6 88.8 47.8 7.6 4.1 7.6-4.1 88.8-47.8 29 96.6 2.5 8.3 8.3 2.5 96.6 29L477.3 464l18.2 0 40.8-75.7L544 374l-15.6-4.7-99.7-29.9-29.9-99.7L394 224l-14.4 7.7L288 281.1zM398.9 464c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l16.2 0c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80l16.2 0zM8 496l-8 0 0 16 8 0 560 0 8 0 0-16-8 0L8 496z" />
    </Icon>
);

export default Sunrise;