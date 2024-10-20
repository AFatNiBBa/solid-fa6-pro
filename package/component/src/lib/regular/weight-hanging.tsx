
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=regular weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 88a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm118.4 40c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 14.4 3.5 28 9.6 40L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-57.6 0zM256 176l136 0 72 288L48 464l72-288 136 0z" />
    </Icon>
);

export default WeightHanging;