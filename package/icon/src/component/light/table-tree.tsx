
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=light table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 64 80 0 368 0 0-64c0-17.7-14.3-32-32-32L64 64zm64 128l0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-5.6 0-11-1-16-2.7l0 50.7c0 8.8 7.2 16 16 16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-26.5 0-48-21.5-48-48l0-96 0-48-64 0 0 224c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-224-352 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM224 272c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zm80 80l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default TableTree;