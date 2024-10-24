
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-light maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 56L193.4 78.6l-46.1 46.1L256 233.4 364.7 124.7 318.6 78.6 296 56l22.6-22.6L320 32l128 0 32 0 0 32 0 128-1.4 1.4L456 216l-22.6-22.6-46.1-46.1L278.6 256 387.3 364.7l46.1-46.1L456 296l22.6 22.6L480 320l0 128 0 32-32 0-128 0-1.4-1.4L296 456l22.6-22.6 46.1-46.1L256 278.6 147.3 387.3l46.1 46.1L216 456l-22.6 22.6L192 480 64 480l-32 0 0-32 0-128 1.4-1.4L56 296l22.6 22.6 46.1 46.1L233.4 256 124.7 147.3 78.6 193.4 56 216 33.4 193.4 32 192 32 64l0-32 32 0 128 0 1.4 1.4L216 56zm-53.3 8L64 64l0 98.7L162.7 64zM64 349.3L64 448l98.7 0L64 349.3zm384 0L349.3 448l98.7 0 0-98.7zm0-186.5L448 64l-98.7 0L448 162.7z" />
    </Icon>
);

export default Maximize;