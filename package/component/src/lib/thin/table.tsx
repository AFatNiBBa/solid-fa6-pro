
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=thin table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 96c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 64L16 160l0-64zm232 80l0 128L16 304l0-128 232 0zm16 0l232 0 0 128-232 0 0-128zM248 320l0 144L64 464c-26.5 0-48-21.5-48-48l0-96 232 0zm16 144l0-144 232 0 0 96c0 26.5-21.5 48-48 48l-184 0zM0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z" />
    </Icon>
);

export default Table;