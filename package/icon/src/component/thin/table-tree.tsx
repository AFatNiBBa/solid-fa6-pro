
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=thin table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 64 480 0 0-64c0-26.5-21.5-48-48-48L64 48zM16 176l0 240c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-240-384 0 0 72c0 13.3 10.7 24 24 24l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-9 0-17.3-3-24-8l0 64c0 13.3 10.7 24 24 24l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0c-22.1 0-40-17.9-40-40l0-96 0-72-80 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM224 280c0-4.4 3.6-8 8-8l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8zm72 88l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default TableTree;