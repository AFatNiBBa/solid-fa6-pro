
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=sharp-regular weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm304 0c0-22.6-4.3-44.2-12-64l44 0 0 352L48 464l0-352 44 0c-7.7 19.8-12 41.4-12 64c0 97.2 78.8 176 176 176s176-78.8 176-176zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L48 64 0 64l0 48L0 464l0 48 48 0 416 0 48 0 0-48 0-352 0-48-48 0-72.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3 6.3-14.7L295.6 91l-6.3 14.7L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
    </Icon>
);

export default WeightScale;