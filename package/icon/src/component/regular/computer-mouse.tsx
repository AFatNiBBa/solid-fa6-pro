
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=regular computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 224L48 224l0 128c0 61.9 50.1 112 112 112l64 0c61.9 0 112-50.1 112-112l0-128-144 0zm192-48l0 24 0 24 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224l0-24 0-24 0-16C0 71.6 71.6 0 160 0l8 0 24 0 24 0 8 0c88.4 0 160 71.6 160 160l0 16zM216 48l0 128 120 0 0-16c0-61.9-50.1-112-112-112l-8 0zm-48 0l-8 0C98.1 48 48 98.1 48 160l0 16 120 0 0-128z" />
    </Icon>
);

export default ComputerMouse;