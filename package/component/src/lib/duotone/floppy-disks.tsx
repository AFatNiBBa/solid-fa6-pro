
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=duotone floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 120L0 376c0 75.1 60.9 136 136 136l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0c-48.6 0-88-39.4-88-88l0-256c0-13.3-10.7-24-24-24S0 106.7 0 120zM240 288a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M152 0C121.1 0 96 25.1 96 56l0 304c0 30.9 25.1 56 56 56l304 0c30.9 0 56-25.1 56-56l0-218.7c0-14.9-5.9-29.1-16.4-39.6L410.3 16.4C399.8 5.9 385.6 0 370.7 0L152 0zm8 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-32zM304 224a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default FloppyDisks;