
import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=sharp-regular block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 80l0 48 56 0 48 0 56 0 0-48L144 80zM96 128l0-48L48 80l0 48 48 0zM48 176l0 56 152 0 0-56L48 176zm0 160l48 0 0-56-48 0 0 56zm0 48l0 48 152 0 0-48-56 0-48 0-48 0zm96-48l160 0 0-56-160 0 0 56zm208 0l48 0 0-56-48 0 0 56zm48 48l-48 0-48 0-56 0 0 48 152 0 0-48zm0-208l-152 0 0 56 152 0 0-56zm0-48l0-48-48 0 0 48 48 0zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32z" />
    </Icon>
);

export default BlockBrick;