
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=solid swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32C0 14.3 14.3 0 32 0L160 0c17.7 0 32 14.3 32 32l0 384c0 53-43 96-96 96s-96-43-96-96L0 32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9l0-262 75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192L480 320c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-297.2 0zM128 64L64 64l0 64 64 0 0-64zM64 192l0 64 64 0 0-64-64 0zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Swatchbook;