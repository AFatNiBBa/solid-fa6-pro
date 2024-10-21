
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=solid window}
 * @preview ![window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/window.svg)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320zM96 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM288 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Window;