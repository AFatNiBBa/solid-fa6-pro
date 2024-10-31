
import { Icon } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=thin vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l24 0 16 0 160 0 16 0 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 218.8c-6.1 8.7-11.5 18-16 27.8l0-86.6L48 208l0 176c0 44.2 35.8 80 80 80c31.4 0 58.6-18.1 71.7-44.4c2 6.6 4.4 13 7.1 19.2C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 48 8 48c-4.4 0-8-3.6-8-8zm48 8l0 144 160 0 0-144L48 48zM368 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm69.7 98.3c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L352 396.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0z" />
    </Icon>
);

export default VialCircleCheck;