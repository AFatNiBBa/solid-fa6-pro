
import { Icon } from "../../index";

/**
 * A component that renders the `dashcube` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dashcube?s=brands dashcube}
 * @preview ![dashcube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/dashcube.svg)
 */
const Dashcube: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M326.6 104H110.4c-51.1 0-91.2 43.3-91.2 93.5V427c0 50.5 40.1 85 91.2 85h227.2c51.1 0 91.2-34.5 91.2-85V0L326.6 104zM153.9 416.5c-17.7 0-32.4-15.1-32.4-32.8V240.8c0-17.7 14.7-32.5 32.4-32.5h140.7c17.7 0 32 14.8 32 32.5v123.5l51.1 52.3H153.9z" />
    </Icon>
);

export default Dashcube;