
import { Icon } from "../../index";

/**
 * A component that renders the `marker` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=thin marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path d="M469.7 42.3C440 12.7 392 12.7 362.3 42.3L192 212.7 299.3 320 469.7 149.7c29.6-29.6 29.6-77.7 0-107.3zM288 331.3L180.7 224l-69.8 69.8c-45.8 45.8-77 104.1-89.7 167.6l-5 25c-.5 2.6 .3 5.3 2.2 7.2s4.6 2.7 7.2 2.2l25-5c63.5-12.7 121.8-43.9 167.6-89.7L288 331.3zM351 31C386.9-4.8 445.1-4.8 481 31s35.9 94.1 0 129.9L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L313.4 68.7 300.3 55.6c-15.6-15.6-40.9-15.6-56.6 0l-94.1 94.1c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l94.1-94.1c21.9-21.9 57.3-21.9 79.2 0l13.1 13.1L351 31z" />
    </Icon>
);

export default Marker;