
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-fairy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-fairy?s=sharp-duotone-solid person-fairy}
 * @preview ![person-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-fairy.svg)
 */
const PersonFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64l0 48c0 86.7 40.6 163.9 103.7 213.7C78.7 360 64 402.3 64 448l0 32 32 0 16 0c55.9 0 106.6-22 144-57.9l0-70.1-40 0 8-192 48.8 0c-51-77.1-138.6-128-238-128L32 32 0 32zM367.2 160l48.8 0 8 192-40 0 0 70.1C421.4 458 472.1 480 528 480l16 0 32 0 0-32c0-45.7-14.7-88-39.7-122.3C599.4 275.9 640 198.7 640 112l0-48 0-32-32 0-2.9 0c-99.4 0-186.9 50.9-238 128z" />
        <path d="M256 64a64 64 0 1 1 128 0A64 64 0 1 1 256 64zm160 96l8 192-40 0 0 160-128 0 0-160-40 0 8-192 192 0z" />
    </Icon>
);

export default PersonFairy;