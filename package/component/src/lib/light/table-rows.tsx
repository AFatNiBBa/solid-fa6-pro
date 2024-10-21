
import { Icon } from "../../index";

/**
 * A component that renders the `table-rows` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-rows?s=light table-rows}
 * @preview ![table-rows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-rows.svg)
 */
const TableRows: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96c0-17.7 14.3-32 32-32l64 0 0 176 0 32 0 176-64 0c-17.7 0-32-14.3-32-32L32 96zM160 272l320 0 0 144c0 17.7-14.3 32-32 32l-288 0 0-176zm320-32l-320 0 0-176 288 0c17.7 0 32 14.3 32 32l0 144zM0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z" />
    </Icon>
);

export default TableRows;