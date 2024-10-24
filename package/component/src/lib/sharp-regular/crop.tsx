
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=sharp-regular crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 24 0 326.1L350.1 128 160 128l0-48 238.1 0 57-57 17-17L505.9 40 489 57l-57 57L432 384l56 0 24 0 0 48-24 0-56 0 0 56 0 24-48 0 0-24 0-326.1L161.9 384 328 384l24 0 0 48-24 0-224 0-24 0 0-24 0-280-56 0L0 128 0 80l24 0 56 0 0-56L80 0l48 0z" />
    </Icon>
);

export default Crop;