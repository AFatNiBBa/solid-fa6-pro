
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-left?s=duotone chevrons-left}
 * @preview ![chevrons-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chevrons-left.svg)
 */
const ChevronsLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 256c0 8.2 3.1 16.4 9.4 22.6l192 192c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L301.3 256 470.6 86.6c12.5-12.5 12.5-32.8 0-45.3C464.4 35.1 456.2 32 448 32s-16.4 3.1-22.6 9.4l-192 192c-6.2 6.2-9.4 14.4-9.4 22.6z" />
        <path d="M41.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l192-192c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256 278.6 425.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-192-192z" />
    </Icon>
);

export default ChevronsLeft;