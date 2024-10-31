
import { Icon, generic } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=sharp-duotone-solid x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 96l0 320 448 0 0-320L32 96zm80 128l16 0 112 0 0-32-80 0-16 0 0-32 16 0 80 0 0-16 0-16 32 0 0 16 0 16 80 0 16 0 0 32-16 0-80 0 0 32 112 0 16 0 0 32-16 0-112 0 0 54.6L330.7 288l53.3 0 0 41.6L341.3 384l-170.7 0L128 329.6l0-41.6 53.3 0L240 310.6l0-54.6-112 0-16 0 0-32zm80 112a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M0 32l32 0 448 0 32 0 0 64-32 0L32 96 0 96 0 32zM0 416l32 0 448 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default XRay;