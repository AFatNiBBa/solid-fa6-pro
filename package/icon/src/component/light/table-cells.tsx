
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=light table-cells}
 * @preview ![table-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-cells.svg)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 64l0 96 128 0 0-64c0-17.7-14.3-32-32-32l-96 0zm-32 0L192 64l0 96 128 0 0-96zM160 64L64 64C46.3 64 32 78.3 32 96l0 64 128 0 0-96zM32 192l0 128 128 0 0-128L32 192zm0 160l0 64c0 17.7 14.3 32 32 32l96 0 0-96L32 352zm160 96l128 0 0-96-128 0 0 96zm160 0l96 0c17.7 0 32-14.3 32-32l0-64-128 0 0 96zM480 320l0-128-128 0 0 128 128 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM192 320l128 0 0-128-128 0 0 128z" />
    </Icon>
);

export default TableCells;