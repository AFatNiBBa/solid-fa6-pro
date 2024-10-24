
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=sharp-regular chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32l0 24 0 376 440 0 24 0 0 48-24 0L24 480 0 480l0-24L0 56 0 32l48 0zM192 224l0 24 0 80 0 24-48 0 0-24 0-80 0-24 48 0zm96-72l0 176 0 24-48 0 0-24 0-176 0-24 48 0 0 24zm96 40l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM480 88l0 240 0 24-48 0 0-24 0-240 0-24 48 0 0 24z" />
    </Icon>
);

export default ChartColumn;