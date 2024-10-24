
import { Icon, generic } from "../../index";

/**
 * A component that renders the `weight-scale` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-scale?s=sharp-duotone-solid weight-scale}
 * @preview ![weight-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/weight-scale.svg)
 */
const WeightScale: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 176a176 176 0 1 0 352 0A176 176 0 1 0 80 176zm136 48c0-22 17.8-39.9 39.7-40l33.6-78.3L295.6 91 325 103.6l-6.3 14.7-33.6 78.3c6.7 7.2 10.9 16.8 10.9 27.4c0 22.1-17.9 40-40 40s-40-17.9-40-40z" />
        <path d="M256 352c97.2 0 176-78.8 176-176c0-42.5-15.1-81.6-40.2-112L512 64l0 448L0 512 0 64l120.2 0C95.1 94.4 80 133.5 80 176c0 97.2 78.8 176 176 176zm40-128c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-22 17.8-39.9 39.7-40l33.6-78.3L295.6 91 325 103.6l-6.3 14.7-33.6 78.3c6.7 7.2 10.9 16.8 10.9 27.4z" />
    </Icon>
);

export default WeightScale;