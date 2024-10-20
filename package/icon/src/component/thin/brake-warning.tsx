
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=thin brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 432a224 224 0 1 0 0-448 224 224 0 1 0 0 448zm8-344c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-160zm-8 232a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM62.7 96.3c2.4-3.7 1.3-8.7-2.4-11.1s-8.7-1.3-11.1 2.4C18.1 136.2 0 194 0 256s18.1 119.8 49.3 168.3c2.4 3.7 7.3 4.8 11.1 2.4s4.8-7.3 2.4-11.1C33.2 369.6 16 314.8 16 256s17.2-113.6 46.7-159.7zm528-8.6c-2.4-3.7-7.3-4.8-11.1-2.4s-4.8 7.3-2.4 11.1C606.8 142.4 624 197.2 624 256s-17.2 113.6-46.7 159.7c-2.4 3.7-1.3 8.7 2.4 11.1s8.7 1.3 11.1-2.4C621.9 375.8 640 318 640 256s-18.1-119.8-49.3-168.3z" />
    </Icon>
);

export default BrakeWarning;