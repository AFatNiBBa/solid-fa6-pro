
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=light table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64c17.7 0 32 14.3 32 32l0 64L32 160l0-64c0-17.7 14.3-32 32-32l384 0zM32 416l0-224 128 0 0 256-96 0c-17.7 0-32-14.3-32-32zm160 32l0-256 288 0 0 224c0 17.7-14.3 32-32 32l-256 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default TableLayout;