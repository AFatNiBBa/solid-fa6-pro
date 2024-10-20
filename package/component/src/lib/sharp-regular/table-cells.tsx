
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells?s=sharp-regular table-cells}
 * @preview ![table-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table-cells.svg)
 */
const TableCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M360 80l0 88 104 0 0-88L360 80zm-48 0L200 80l0 88 112 0 0-88zM152 80L48 80l0 88 104 0 0-88zM48 216l0 80 104 0 0-80L48 216zm0 128l0 88 104 0 0-88L48 344zm152 88l112 0 0-88-112 0 0 88zm160 0l104 0 0-88-104 0 0 88zM464 296l0-80-104 0 0 80 104 0zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM200 296l112 0 0-80-112 0 0 80z" />
    </Icon>
);

export default TableCells;