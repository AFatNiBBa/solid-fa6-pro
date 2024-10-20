
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=light table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 64 448 0 0-64c0-17.7-14.3-32-32-32L64 64zM32 192l0 112 208 0 0-112L32 192zm240 0l0 112 208 0 0-112-208 0zM240 336L32 336l0 80c0 17.7 14.3 32 32 32l176 0 0-112zm32 112l176 0c17.7 0 32-14.3 32-32l0-80-208 0 0 112zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default Table;