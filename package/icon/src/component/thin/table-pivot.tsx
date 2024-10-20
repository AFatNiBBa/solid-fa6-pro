
import { Icon } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=thin table-pivot}
 * @preview ![table-pivot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-pivot.svg)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 64 112 0 0-112L64 48zM16 176l0 240c0 26.5 21.5 48 48 48l64 0 0-288L16 176zm128 0l0 288 304 0c26.5 0 48-21.5 48-48l0-240-352 0zm352-16l0-64c0-26.5-21.5-48-48-48L144 48l0 112 352 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM445.7 285.7c-3.1 3.1-8.2 3.1-11.3 0L408 259.3l0 76.7c0 22.1-17.9 40-40 40l-76.7 0 26.3 26.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-40-40c-3.1-3.1-3.1-8.2 0-11.3l40-40c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L291.3 360l76.7 0c13.3 0 24-10.7 24-24l0-76.7-26.3 26.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l40-40c3.1-3.1 8.2-3.1 11.3 0l40 40c3.1 3.1 3.1 8.2 0 11.3z" />
    </Icon>
);

export default TablePivot;