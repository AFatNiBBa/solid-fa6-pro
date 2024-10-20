
import { Icon } from "../../index";

/**
 * A component that renders the `mercury` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=sharp-regular mercury}
 * @preview ![mercury](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mercury.svg)
 */
const Mercury: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M50.6 0C62 28.6 81.7 52.9 106.9 69.9C52.7 99.9 16 157.7 16 224c0 89.1 66.2 162.7 152 174.4l0 25.6-32 0-24 0 0 48 24 0 32 0 0 16 0 24 48 0 0-24 0-16 32 0 24 0 0-48-24 0-32 0 0-25.6c85.8-11.7 152-85.3 152-174.4c0-66.3-36.7-124.1-90.9-154.1C302.3 52.9 322 28.6 333.4 0L279.7 0C261.2 28.9 228.8 48 192 48s-69.2-19.1-87.7-48L50.6 0zM192 96a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default Mercury;