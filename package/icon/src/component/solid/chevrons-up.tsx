
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-up?s=solid chevrons-up}
 * @preview ![chevrons-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chevrons-up.svg)
 */
const ChevronsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3 425.4 278.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-192-192zm192 384l-192-192c-12.5-12.5-32.8-12.5-45.3 0l-192 192c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 301.3 425.4 470.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
    </Icon>
);

export default ChevronsUp;