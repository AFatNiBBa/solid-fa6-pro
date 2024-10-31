
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=sharp-light x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 32 0 416 0 32 0 16 0 0 32-16 0-16 0 0 384 16 0 16 0 0 32-16 0-32 0L48 480l-32 0L0 480l0-32 16 0 16 0L32 64 16 64 0 64 0 32zM64 64l0 384 384 0 0-384L64 64zM272 96l0 16 0 32 64 0 16 0 0 32-16 0-64 0 0 32 96 0 16 0 0 32-16 0-96 0 0 53.5 52.9-20.4 2.8-1.1 3 0 53.3 0 16 0 0 16 0 57.6 0 5.5-3.4 4.3-42.7 54.4-4.8 6.1-7.8 0-170.7 0-7.8 0-4.8-6.1-42.7-54.4-3.4-4.3 0-5.5 0-57.6 0-16 16 0 53.3 0 3 0 2.8 1.1L240 293.5l0-53.5-96 0-16 0 0-32 16 0 96 0 0-32-64 0-16 0 0-32 16 0 64 0 0-32 0-16 32 0zM144 340.1L178.5 384l155.1 0L368 340.1l0-36.1-34.4 0-71.9 27.7-5.8 2.2-5.8-2.2L178.4 304 144 304l0 36.1zM192 352a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default XRay;