
import { Icon } from "../../index";

/**
 * A component that renders the `shuttle-space` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttle-space?s=sharp-regular shuttle-space}
 * @preview ![shuttle-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shuttle-space.svg)
 */
const ShuttleSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 384l-8 0L0 384l0-24 0-32L0 184l0-32 0-24 24 0 8 0 0-48 0-48 48 0 112 0L405.3 160l50.7 0c70.4 0 127.6 23.5 171.2 81.6L638 256l-10.8 14.4C583.6 328.5 526.4 352 456 352l-50.7 0L192 480 80 480l-48 0 0-48 0-48zm280-32l-151.1 0L128 371.4l0 60.6 50.7 0L312 352zm0-192L178.7 80 128 80l0 60.6L160.9 160 312 160zM48 184l0 144 0 8 45.5 0 48.8-28.7 5.6-3.3 6.5 0L456 304c34.4 0 63.3-6.5 88-21.1l0-53.7c-24.7-14.7-53.6-21.1-88-21.1l-301.6 0-6.5 0-5.6-3.3L93.5 176 48 176l0 8zm432 40l0 64-32 0 0-64 32 0z" />
    </Icon>
);

export default ShuttleSpace;