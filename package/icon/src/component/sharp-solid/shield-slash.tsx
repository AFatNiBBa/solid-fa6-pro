
import { Icon } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=sharp-solid shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L498.4 364.1c9.1-15.2 17-30.7 23.8-46.2c32.5-74.2 40.3-150.2 37.3-199.8l-1.2-20.6L539 90.2l-207.5-80L320 5.7l-11.5 4.4L130.7 78.7 48.4 14.8zM117.9 318c32.7 74.8 91.1 149.1 189.5 191.4l12.6 5.4 12.6-5.4c41.8-18 76.3-41.7 104.8-68.8L80.6 159.5C83 205.3 93.5 262.1 117.9 318z" />
    </Icon>
);

export default ShieldSlash;