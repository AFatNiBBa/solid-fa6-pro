
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-cells` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-cells?s=regular diagram-cells}
 * @preview ![diagram-cells](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diagram-cells.svg)
 */
const DiagramCells: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 224c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0zm16 128l0 64c0 8.8-7.2 16-16 16l-80 0-224 0-80 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16zm48 64l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64z" />
    </Icon>
);

export default DiagramCells;