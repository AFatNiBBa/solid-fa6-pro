
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=thin computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 192l168 0 0-176-24 0C80.5 16 16 80.5 16 160l0 32zM184 0l8 0 8 0 24 0c88.4 0 160 71.6 160 160l0 32 0 8 0 8 0 144c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 208l0-8 0-8 0-32C0 71.6 71.6 0 160 0l24 0zM16 208l0 144c0 79.5 64.5 144 144 144l64 0c79.5 0 144-64.5 144-144l0-144-176 0L16 208zm352-16l0-32c0-79.5-64.5-144-144-144l-24 0 0 176 168 0z" />
    </Icon>
);

export default ComputerMouse;