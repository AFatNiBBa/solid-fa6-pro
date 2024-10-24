
import { Icon } from "../../index";

/**
 * A component that renders the `lighthouse` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lighthouse?s=sharp-solid lighthouse}
 * @preview ![lighthouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lighthouse.svg)
 */
const Lighthouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 64l32-16L320 0l96 48 32 16 0 48-24 0-8 0 0 7.6 0 40.4 32 0 0 64-20.4 0 40.7 224 11.6 0 32 0 0 64-32 0-128 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-128 0-32 0 0-64 32 0 11.6 0 40.7-224L192 224l0-64 32 0 0-40.4 0-7.6-8 0-24 0 0-48zm160 48l0-24.4-32-16-32 16 0 24.4 0 48 64 0 0-48zM145.5 49.9l22.1 9.5-18.9 44.1-22.1-9.5-112-48L33.5 1.9l112 48zm0 156.1l-112 48L14.5 209.9l112-48 22.1-9.5 18.9 44.1-22.1 9.5zM606.6 1.9l18.9 44.1-112 48-22.1 9.5L472.5 59.4l22.1-9.5 112-48zM472.5 196.6l18.9-44.1 22.1 9.5 112 48-18.9 44.1-112-48-22.1-9.5z" />
    </Icon>
);

export default Lighthouse;