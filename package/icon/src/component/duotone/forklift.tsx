
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forklift` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=duotone forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 432a80 80 0 1 0 160 0A80 80 0 1 0 0 432zm256 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM480 32l0 384c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-352c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M160 160l96 96 94 0L281.4 64 160 64l0 96zm-64 0L96 48c0-26.5 21.5-48 48-48L292.7 0c20.3 0 38.4 12.8 45.2 31.9l75.3 210.8c1.8 5.2 2.8 10.6 2.8 16.1l0 94.8c-20.3-20.7-48.7-33.6-80-33.6c-56.4 0-103.1 41.7-110.9 96l-34.3 0c-7.8-54.3-54.4-96-110.9-96c-31.3 0-59.7 12.9-80 33.6L0 208c0-26.5 21.5-48 48-48l48 0z" />
    </Icon>
);

export default Forklift;