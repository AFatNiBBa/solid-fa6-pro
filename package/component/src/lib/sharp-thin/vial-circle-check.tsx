
import { Icon } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=sharp-thin vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l8 0 24 0 16 0 160 0 16 0 24 0 8 0 0 16-8 0-24 0 0 218.8c-6.1 8.7-11.5 18-16 27.8l0-86.6L48 208l0 176c0 44.2 35.8 80 80 80c31.4 0 58.6-18.1 71.7-44.4c2 6.6 4.4 13 7.1 19.2C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 48 8 48 0 48 0 32zM48 48l0 144 160 0 0-144L48 48zM368 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm75.3 104l-5.7 5.7-80 80-5.7 5.7-5.7-5.7-48-48-5.7-5.7L304 348.7l5.7 5.7L352 396.7l74.3-74.3 5.7-5.7L443.3 328z" />
    </Icon>
);

export default VialCircleCheck;