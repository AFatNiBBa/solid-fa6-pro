
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=thin chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 408c0 39.8 32.2 72 72 72l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 464c-30.9 0-56-25.1-56-56L16 40zM308.7 203.3c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l39.6-39.6c6.6-6.6 17.4-6.2 23.5 .9l62 72.3c5 5.8 7.7 13.2 7.7 20.8l0 94.2c0 8.8-7.2 16-16 16l-320 0c-8.8 0-16-7.2-16-16l0-108.1c0-8.5 3.4-16.6 9.4-22.6l91.3-91.3c6.2-6.2 16.4-6.2 22.6 0l73.4 73.4zM320 192l-11.3-11.3-62.1-62.1c-12.5-12.5-32.8-12.5-45.3 0l-91.3 91.3c-9 9-14.1 21.2-14.1 33.9L96 352c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-94.2c0-11.5-4.1-22.5-11.6-31.2l-62-72.3c-12.1-14.2-33.7-15-46.9-1.8l-28.2 28.3L320 192z" />
    </Icon>
);

export default ChartArea;