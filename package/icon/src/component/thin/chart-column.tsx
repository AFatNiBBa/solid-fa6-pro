
import { Icon } from "../../index";

/**
 * A component that renders the `chart-column` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-column?s=thin chart-column}
 * @preview ![chart-column](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-column.svg)
 */
const ChartColumn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 408c0 39.8 32.2 72 72 72l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 464c-30.9 0-56-25.1-56-56L16 40zm416 72c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zM240 176c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16zm-96 96c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm192-32c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM464 128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM272 192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160zm-96 96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64zm160-64c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default ChartColumn;