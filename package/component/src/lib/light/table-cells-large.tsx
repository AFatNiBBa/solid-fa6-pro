
import { Icon } from "../../index";

/**
 * A component that renders the `table-cells-large` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-large?s=light table-cells-large}
 * @preview ![table-cells-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-cells-large.svg)
 */
const TableCellsLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 64l0 176 208 0 0-144c0-17.7-14.3-32-32-32L272 64zm-32 0L64 64C46.3 64 32 78.3 32 96l0 144 208 0 0-176zM32 272l0 144c0 17.7 14.3 32 32 32l176 0 0-176L32 272zM272 448l176 0c17.7 0 32-14.3 32-32l0-144-208 0 0 176zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default TableCellsLarge;