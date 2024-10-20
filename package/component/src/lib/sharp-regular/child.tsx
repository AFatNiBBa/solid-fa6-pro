
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=sharp-regular child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-96a72 72 0 1 1 0 144A72 72 0 1 1 160 0zM88.9 160l13.6 0L216 160l13.4 0 7 11.4 68.8 112 12.6 20.4L276.9 329l-12.6-20.4L240 268.9 240 488l0 24-48 0 0-24 0-104-64 0 0 104 0 24-48 0 0-24 0-220L55.8 308.4 43.4 328.9 2.3 304.2l12.4-20.6 67.3-112 7-11.6zM128 336l64 0 0-128-64 0 0 128z" />
    </Icon>
);

export default Child;