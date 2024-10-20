
import { Icon } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=sharp-thin shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM422.9 429c-26.5 24.7-58.4 46.3-96.6 62.8l-6.4 2.7-6.4-2.7C219.8 451.2 164 379.9 132.5 307.5c-20.4-46.9-30.6-94.4-34.6-135.1L80.8 158.9c2.9 45.3 13.4 100.6 37 155c32.7 75.3 91 150 189.4 192.6L320 512l12.7-5.5c40.9-17.7 74.8-40.9 102.9-67.5l-12.7-10zM308.4 4.5L180.5 54.1l14.6 11.5L314.2 19.4l5.8-2.2 5.8 2.2L533.3 99.9l9.6 3.7 .6 10.3c2.8 47.8-4.7 121.5-36 193.6c-.5 1.2-1 2.3-1.5 3.5l12.9 10.2c1.1-2.4 2.2-4.9 3.3-7.3c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L539.1 85 331.6 4.5 320 0 308.4 4.5z" />
    </Icon>
);

export default ShieldSlash;