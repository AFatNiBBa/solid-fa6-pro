
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress-fairy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-fairy?s=sharp-duotone-solid person-dress-fairy}
 * @preview ![person-dress-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-dress-fairy.svg)
 */
const PersonDressFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64l0 48c0 86.7 40.6 163.9 103.7 213.7C78.7 360 64 402.3 64 448l0 32 32 0 16 0c55.9 0 106.6-22 144-57.9l0-38.1-64 0 64-224 16.8 0c-51-77.1-138.6-128-238-128L32 32 0 32zM367.2 160l16.8 0 64 224-64 0 0 38.1C421.4 458 472.1 480 528 480l16 0 32 0 0-32c0-45.7-14.7-88-39.7-122.3C599.4 275.9 640 198.7 640 112l0-48 0-32-32 0-2.9 0c-99.4 0-186.9 50.9-238 128z" />
        <path d="M256 64a64 64 0 1 1 128 0A64 64 0 1 1 256 64zm128 96l64 224-64 0 0 128-128 0 0-128-64 0 64-224 128 0z" />
    </Icon>
);

export default PersonDressFairy;