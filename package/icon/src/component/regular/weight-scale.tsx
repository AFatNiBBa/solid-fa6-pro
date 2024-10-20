
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=regular weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm304 0c0-22.6-4.3-44.2-12-64l28 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l28 0c-7.7 19.8-12 41.4-12 64c0 97.2 78.8 176 176 176s176-78.8 176-176zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-56.2 0zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
    </Icon>
);

export default WeightScale;