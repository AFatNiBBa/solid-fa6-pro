
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-regular toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32l24 0 208 0 24 0 0 24 0 72 48 0 80 80 0 96 0 48 0 80 0 48-48 0L48 480 0 480l0-48 0-80 0-48 0-96 80-80 48 0 0-72 0-24zM48 352l0 80 416 0 0-80-96 0 0 16 0 24-48 0 0-24 0-16-128 0 0 16 0 24-48 0 0-24 0-16-96 0zm416-48l0-76.1L412.1 176 99.9 176 48 227.9 48 304l96 0 0-16 0-24 48 0 0 24 0 16 128 0 0-16 0-24 48 0 0 24 0 16 96 0zM336 80L176 80l0 48 160 0 0-48z" />
    </Icon>
);

export default Toolbox;