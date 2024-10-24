
import { Icon } from "../../index";

/**
 * A component that renders the `desktop-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop-arrow-down?s=sharp-regular desktop-arrow-down}
 * @preview ![desktop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/desktop-arrow-down.svg)
 */
const DesktopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 0L224 0l0 48L48 48l0 208 480 0 0-208L352 48l0-48L528 0l48 0 0 48 0 208 0 48 0 64 0 48-48 0-163.7 0 8 48 51.7 0 24 0 0 48-24 0-72 0-128 0-72 0-24 0 0-48 24 0 51.7 0 8-48L48 416 0 416l0-48 0-64 0-48L0 48 0 0 48 0zm0 304l0 64 480 0 0-64L48 304zM252.3 464l71.3 0-8-48-55.3 0-8 48zM312 24l0 110.1 39-39 17-17L401.9 112l-17 17-80 80-17 17-17-17-80-80-17-17L208 78.1l17 17 39 39L264 24l0-24 48 0 0 24z" />
    </Icon>
);

export default DesktopArrowDown;