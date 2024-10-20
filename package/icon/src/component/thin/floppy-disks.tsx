
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=thin floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 352l0-288c0-26.5 21.5-48 48-48l0 96c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-94.8c8.8 2 17 6.4 23.4 12.9l74.5 74.5c9 9 14.1 21.2 14.1 33.9L496 352c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48zM176 0L160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-213.5c0-17-6.7-33.3-18.7-45.3L418.7 18.7C406.7 6.7 390.5 0 373.5 0L176 0zm16 128c-8.8 0-16-7.2-16-16l0-96 192 0 0 96c0 8.8-7.2 16-16 16l-160 0zm48 144a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM0 160L0 448c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l0-16C28.7 96 0 124.7 0 160z" />
    </Icon>
);

export default FloppyDisks;