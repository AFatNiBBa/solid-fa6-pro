
import { Icon } from "../../index";

/**
 * A component that renders the `cloud` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=light cloud}
 * @preview ![cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cloud.svg)
 */
const Cloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M429.7 135.7c10.3-4.9 21.9-7.7 34.3-7.7c44.2 0 80 35.8 80 80c0 7.7-1.1 15-3 22c-4.1 14.5 2.5 30 15.8 37.1C587.3 283.2 608 315.2 608 352c0 53-43 96-96 96l-368 0C82.1 448 32 397.9 32 336c0-48.8 31.2-90.3 74.8-105.7c12.3-4.3 20.8-15.7 21.3-28.8C131.5 125 194.6 64 272 64c48.7 0 91.7 24.1 117.8 61.2c9 12.7 25.8 17.2 39.9 10.5zM416 106.8C384.1 61.5 331.5 32 272 32c-94.6 0-171.7 74.6-175.8 168.1C40.2 219.9 0 273.2 0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-49.1-27.7-91.8-68.3-113.2c2.8-9.8 4.3-20.1 4.3-30.8c0-61.9-50.1-112-112-112c-17.2 0-33.5 3.9-48 10.8z" />
    </Icon>
);

export default Cloud;