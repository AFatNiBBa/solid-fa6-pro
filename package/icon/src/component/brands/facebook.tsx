
import { Icon } from "../../index";

/**
 * A component that renders the `facebook` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/facebook?s=brands facebook}
 * @preview ![facebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/facebook.svg)
 */
const Facebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
    </Icon>
);

export default Facebook;