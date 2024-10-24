
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-thin up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M192 352l-16 0 0-16 0-160 0-16 16 0 48 0 16 0 0-16 0-16L139.3 11.3 128 0 116.7 11.3 0 128l0 16 0 16 16 0 48 0 16 0 0 16 0 160 0 16-16 0-48 0L0 352l0 16 0 16L116.7 500.7 128 512l11.3-11.3L256 384l0-16 0-16-16 0-48 0zm48 16l0 9.4-112 112L16 377.4l0-9.4 64 0 16 0 0-16 0-192 0-16-16 0-64 0 0-9.4 112-112 112 112 0 9.4-64 0-16 0 0 16 0 192 0 16 16 0 64 0z" />
    </Icon>
);

export default UpDown;