
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=regular crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 24C80 10.7 90.7 0 104 0s24 10.7 24 24l0 326.1L350.1 128 160 128l0-48 238.1 0L471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-73 73L432 384l56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-326.1L161.9 384 352 384l0 48-216 0c-30.9 0-56-25.1-56-56l0-248-56 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l56 0 0-56z" />
    </Icon>
);

export default Crop;