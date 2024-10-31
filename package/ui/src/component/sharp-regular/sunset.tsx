
import { Icon } from "../../index";

/**
 * A component that renders the `sunset` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunset?s=sharp-regular sunset}
 * @preview ![sunset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sunset.svg)
 */
const Sunset: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M305 217l80-80 17-17L368 86.1l-17 17-39 39L312 24l0-24L264 0l0 24 0 118.1-39-39-17-17L174.1 120l17 17 80 80 17 17 17-17zm-17 64.1l-62.9-33.9L182 224l-14.1 46.9-20.5 68.4L78.9 359.9 32 374l23.2 43.1L80.5 464 24 464 0 464l0 48 24 0 528 0 24 0 0-48-24 0-56.5 0 25.3-46.9L544 374l-46.9-14.1-68.4-20.5-20.5-68.4L394 224l-43.1 23.2L288 281.1zM177.1 464L135 464l-3.6-6.8L102.2 403l59-17.7 24.8-7.4 7.4-24.8 17.7-59 54.2 29.2L288 335.6l22.8-12.3L365 294.2l17.7 59 7.4 24.8 24.8 7.4 59 17.7-29.2 54.2L441 464l-42.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96zM288 416c29.8 0 54.9 20.4 62 48l-124 0c7.1-27.6 32.2-48 62-48z" />
    </Icon>
);

export default Sunset;