
import { Icon } from "../../index";

/**
 * A component that renders the `window-flip` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-flip?s=regular window-flip}
 * @preview ![window-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/window-flip.svg)
 */
const WindowFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64 0 48 0 16L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192 0-16 0-48 0-64zM48 224l416 0 0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192zM416 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-64 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM224 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default WindowFlip;