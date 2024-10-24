
import { Icon } from "../../index";

/**
 * A component that renders the `square-d` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-d?s=thin square-d}
 * @preview ![square-d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-d.svg)
 */
const SquareD: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 54.9l0 210.3c0 3.8 3.1 6.9 6.9 6.9l73.1 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-73.1 0c-3.8 0-6.9 3.1-6.9 6.9zm6.9-22.9l73.1 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-73.1 0c-12.6 0-22.9-10.2-22.9-22.9l0-210.3c0-12.6 10.2-22.9 22.9-22.9z" />
    </Icon>
);

export default SquareD;