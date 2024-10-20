
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=sharp-regular floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 416l48 0 320 0 48 0 0-48 0-256L400 0 224 0 176 0 144 0 96 0l0 48 0 320 0 48zM176 48l0 72 0 24 24 0 160 0 24 0 0-24 0-68.1 80 80L464 368l-320 0 0-320 32 0zm160 0l0 48L224 96l0-48 112 0zM48 120l0-24L0 96l0 24L0 488l0 24 24 0 368 0 24 0 0-48-24 0L48 464l0-344zM368 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default FloppyDisks;