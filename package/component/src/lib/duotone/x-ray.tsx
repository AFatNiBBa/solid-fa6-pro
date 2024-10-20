
import { Icon, generic } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=duotone x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 96l0 320 448 0 0-320L32 96zm80 144c0-8.8 7.2-16 16-16l112 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 32 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-112 0 0 48c0 .4 0 .8 0 1.2l50.4-21.6c5.5-2.4 11.4-3.6 17.4-3.6l7.4 0c20.4 0 36.9 16.5 36.9 36.9c0 8.2-2.8 16.3-7.9 22.8l-19.4 24.8C347 376.8 332.1 384 316.4 384l-120.8 0c-15.7 0-30.6-7.2-40.3-19.6l-19.4-24.8c-5.1-6.5-7.9-14.5-7.9-22.8c0-20.4 16.5-36.9 36.9-36.9l7.4 0c6 0 11.9 1.2 17.4 3.6L240 305.2c0-.4 0-.8 0-1.2l0-48-112 0c-8.8 0-16-7.2-16-16zm80 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z" />
    </Icon>
);

export default XRay;