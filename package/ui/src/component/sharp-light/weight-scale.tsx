
import { Icon } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=sharp-light weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 176a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm320 0c0-28.8-6.9-56-19.2-80L480 96l0 384L32 480 32 96l67.2 0C86.9 120 80 147.2 80 176c0 97.2 78.8 176 176 176s176-78.8 176-176zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64L32 64 0 64 0 96 0 480l0 32 32 0 448 0 32 0 0-32 0-384 0-32-32 0-88.2 0zM320 224c0-20.6-9.7-39-24.9-50.7l23.6-55 6.3-14.7L295.6 91l-6.3 14.7-23.6 55c-3.2-.5-6.4-.7-9.7-.7c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-64-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default WeightScale;