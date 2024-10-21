
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=sharp-solid table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32L0 32 0 96 0 416l0 64 64 0 384 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default Table;