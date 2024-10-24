
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=sharp-light floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 416l32 0 352 0 32 0 0-32 0-272L400 0 192 0 160 0 128 0 96 0l0 32 0 352 0 32zM160 32l0 96 0 16 16 0 192 0 16 0 0-16 0-96 2.7 0L480 125.3 480 384l-352 0 0-352 32 0zm192 0l0 80-160 0 0-80 160 0zM32 112l0-16L0 96l0 16L0 496l0 16 16 0 384 0 16 0 0-32-16 0L32 480l0-368zM296 224a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 112a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </Icon>
);

export default FloppyDisks;