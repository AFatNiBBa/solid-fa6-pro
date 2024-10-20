
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-thin fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 102L72 56.3 112 102l0 362-80 0 0-176 0-186zM61.4 44.1L16 96l0 192 0 176 0 16 16 0 80 0 16 0 0-16 0-96 72 0 0 96 0 16 16 0 80 0 16 0 0-16 0-96 72 0 0 96 0 16 16 0 80 0 16 0 0-16 0-368L450.6 44.1 440 32 429.4 44.1 384 96l0 64-72 0 0-64L266.6 44.1 256 32 245.4 44.1 200 96l0 64-72 0 0-64L82.6 44.1 72 32 61.4 44.1zM384 352l-72 0 0-176 72 0 0 112 0 64zm-184 0l-72 0 0-176 72 0 0 112 0 64zm16-250l40-45.7L296 102l0 362-80 0 0-176 0-186zM400 288l0-186 40-45.7L480 102l0 362-80 0 0-176z" />
    </Icon>
);

export default Fence;