
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=duotone table-tree}
 * @preview ![table-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/table-tree.svg)
 */
const TableTree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 160l0 64 0 96c0 26.5 21.5 48 48 48l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16-7.2-16-16l0-50.7c5 1.8 10.4 2.7 16 2.7l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16-7.2-16-16l0-64-32 0zm128 80l0 32c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16zm64 96l0 32c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM448 160l0 256L64 416l0-256 384 0z" />
    </Icon>
);

export default TableTree;