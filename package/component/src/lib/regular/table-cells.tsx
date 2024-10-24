
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=regular table-cells}
 * @preview ![table-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/table-cells.svg)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M360 80l0 88 104 0 0-72c0-8.8-7.2-16-16-16l-88 0zm-48 0L200 80l0 88 112 0 0-88zM152 80L64 80c-8.8 0-16 7.2-16 16l0 72 104 0 0-88zM48 216l0 80 104 0 0-80L48 216zm0 128l0 72c0 8.8 7.2 16 16 16l88 0 0-88L48 344zm152 88l112 0 0-88-112 0 0 88zm160 0l88 0c8.8 0 16-7.2 16-16l0-72-104 0 0 88zM464 296l0-80-104 0 0 80 104 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 296l112 0 0-80-112 0 0 80z" />
    </Icon>
);

export default TableCells;