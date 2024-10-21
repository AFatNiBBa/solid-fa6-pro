
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=light weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 48c10-13.4 16-30 16-48c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 18 6 34.6 16 48l-72 0c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-72 0zm-64 32l136 0c7.3 0 13.7 5 15.5 12.1l72 288c1.2 4.8 .1 9.8-2.9 13.7s-7.7 6.2-12.6 6.2L48 480c-4.9 0-9.6-2.3-12.6-6.2s-4.1-8.9-2.9-13.7l72-288c1.8-7.1 8.2-12.1 15.5-12.1l136 0z" />
    </Icon>
);

export default WeightHanging;