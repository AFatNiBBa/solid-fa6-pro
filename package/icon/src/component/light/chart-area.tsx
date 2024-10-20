
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=light chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM297.4 214.6c6 6 14.1 9.4 22.6 9.4s16.6-3.4 22.6-9.4l39.6-39.6 62 72.3c2.5 2.9 3.9 6.6 3.9 10.4l0 94.2-320 0 0-108.1c0-4.2 1.7-8.3 4.7-11.3L224 141.3l73.4 73.4zm0-45.3l-50.7-50.7c-12.5-12.5-32.8-12.5-45.3 0l-91.3 91.3c-9 9-14.1 21.2-14.1 33.9L96 352c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-94.2c0-11.5-4.1-22.5-11.6-31.2l-62-72.3c-12.1-14.2-33.7-15-46.9-1.8l-16.9 16.9L320 192l-22.6-22.6z" />
    </Icon>
);

export default ChartArea;