
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=solid floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 56c0-30.9 25.1-56 56-56L370.7 0c14.9 0 29.1 5.9 39.6 16.4l85.3 85.3c10.5 10.5 16.4 24.7 16.4 39.6L512 360c0 30.9-25.1 56-56 56l-304 0c-30.9 0-56-25.1-56-56L96 56zm96 8c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L192 64zM368 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM48 120l0 256c0 48.6 39.4 88 88 88l256 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-256 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default FloppyDisks;