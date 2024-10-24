
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=sharp-thin computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 192l168 0 0-176L16 16l0 176zM184 0l8 0 8 0L368 0l16 0 0 16 0 176 0 8 0 8 0 144c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 208l0-8 0-8L0 16 0 0 16 0 184 0zM16 208l0 144c0 79.5 64.5 144 144 144l64 0c79.5 0 144-64.5 144-144l0-144-176 0L16 208zm352-16l0-176L200 16l0 176 168 0z" />
    </Icon>
);

export default ComputerMouse;