
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-cells-row-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-cells-row-lock?s=duotone table-cells-row-lock}
 * @preview ![table-cells-row-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table-cells-row-lock.svg)
 */
const TableCellsRowLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 65.1c-37.8 5.4-69.4 29.6-85.2 62.9L360 224l0 64 56 0 0 8.6c-19.1 11.1-32 31.7-32 55.4l-24 0 0 64 24 0 0 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 224l0 64 88 0 0-64-88 0zm0 128l0 64 88 0 0-64-88 0zM208 224l0 64 88 0 0-64-88 0zm0 128l0 64 88 0 0-64-88 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default TableCellsRowLock;