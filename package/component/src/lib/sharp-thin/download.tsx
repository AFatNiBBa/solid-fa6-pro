
import { Icon } from "../../index";

/**
 * A component that renders the `download` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=sharp-thin download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0-8L248 0l0 8 0 348.7L133.7 242.3l-5.7-5.7L116.7 248l5.7 5.7 128 128 5.7 5.7 5.7-5.7 128-128 5.7-5.7L384 236.7l-5.7 5.7L264 356.7 264 8zM143.4 320L16 320 0 320l0 16L0 496l0 16 16 0 480 0 16 0 0-16 0-160 0-16-16 0-127.4 0-16 16L496 336l0 160L16 496l0-160 143.4 0-16-16zM432 432a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default Download;