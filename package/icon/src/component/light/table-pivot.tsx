
import { Icon } from "../../index";

/**
 * A component that renders the `table-pivot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-pivot?s=light table-pivot}
 * @preview ![table-pivot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-pivot.svg)
 */
const TablePivot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l0 96 320 0 0-64c0-17.7-14.3-32-32-32L160 64zm0 128l0 256 288 0c17.7 0 32-14.3 32-32l0-224-320 0zM128 64L64 64C46.3 64 32 78.3 32 96l0 64 96 0 0-96zM32 416c0 17.7 14.3 32 32 32l64 0 0-256-96 0 0 224zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM446.8 278.1c-2.5 6-8.3 9.9-14.8 9.9l-16 0 0 48c0 26.5-21.5 48-48 48l-48 0 0 16c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-32-32c-6.2-6.2-6.2-16.4 0-22.6l32-32c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 16 48 0c8.8 0 16-7.2 16-16l0-48-16 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l32-32c6.2-6.2 16.4-6.2 22.6 0l32 32c4.6 4.6 5.9 11.5 3.5 17.4z" />
    </Icon>
);

export default TablePivot;