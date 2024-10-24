
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=solid table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM448 96l0 64L64 160l0-64 384 0zM64 224l64 0 0 192-64 0 0-192zm384 0l0 192-256 0 0-192 256 0z" />
    </Icon>
);

export default TableLayout;