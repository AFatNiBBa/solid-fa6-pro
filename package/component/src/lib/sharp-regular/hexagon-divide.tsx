
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=sharp-regular hexagon-divide}
 * @preview ![hexagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hexagon-divide.svg)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.3 256L155.9 80l200.3 0L456.7 256 356.1 432l-200.3 0L55.3 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm160 96l-64 0 0 64 64 0 0-64zM168 232l-24 0 0 48 24 0 176 0 24 0 0-48-24 0-176 0zm56 88l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default HexagonDivide;