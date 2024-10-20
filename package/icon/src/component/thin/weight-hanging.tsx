
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=thin weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 72a56 56 0 1 1 112 0A56 56 0 1 1 200 72zm101.3 56C317.6 114.8 328 94.6 328 72c0-39.8-32.2-72-72-72s-72 32.2-72 72c0 22.6 10.4 42.8 26.7 56L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-90.7 0zM256 144l136 0c14.7 0 27.5 10 31 24.2l72 288c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3L48 496c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l72-288C92.5 154 105.3 144 120 144l136 0z" />
    </Icon>
);

export default WeightHanging;