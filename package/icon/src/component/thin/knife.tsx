
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=thin knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M460.7 7.3C465 2.6 471.1 0 477.4 0c9.3 0 18 5.7 21 15.1c5 15.8 13.6 49.4 13.6 92.1c0 48.6-15.3 85.8-42.7 122.7c-23 31-54.7 62.1-93 99.5c-6.7 6.6-13.7 13.4-20.8 20.4c0 0 0 0 0 0L345.3 360c-12.7 12.7-30 19.9-48 19.9s-35.3-7.1-48-19.9l-49.7-49.7L13.8 509.5c-3 3.2-8.1 3.4-11.3 .4s-3.4-8.1-.4-11.3L193.6 293.4 460.7 7.3zM210.6 298.6l50 50c9.7 9.7 22.9 15.2 36.7 15.2s27-5.5 36.7-15.2l10.2-10.2c0 0 0 0 0 0c7.3-7.1 14.3-14 21.1-20.7c38.4-37.5 69-67.6 91.2-97.4c25.7-34.7 39.5-68.7 39.5-113.2c0-40.7-8.2-72.5-12.9-87.3c-.7-2.2-2.8-3.9-5.7-3.9c-1.9 0-3.8 .8-5.1 2.2L210.6 298.6z" />
    </Icon>
);

export default Knife;