
import { Icon } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=sharp-thin weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 72a56 56 0 1 1 112 0A56 56 0 1 1 200 72zm101.3 56C317.6 114.8 328 94.6 328 72c0-39.8-32.2-72-72-72s-72 32.2-72 72c0 22.6 10.4 42.8 26.7 56L88 128 3.7 496 0 512l16.4 0 479.2 0 16.4 0-3.7-16L424 128l-122.7 0zM256 144l155.3 0 80.7 352L20.1 496l80.7-352L256 144z" />
    </Icon>
);

export default WeightHanging;