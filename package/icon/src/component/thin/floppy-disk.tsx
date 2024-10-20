
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=thin floppy-disk}
 * @preview ![floppy-disk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/floppy-disk.svg)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 96c0-26.5 21.5-48 48-48l0 112c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-110.8c8.8 2 17 6.4 23.4 12.9l74.5 74.5c9 9 14.1 21.2 14.1 33.9L432 416c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96zM80 48l224 0 0 112c0 8.8-7.2 16-16 16L96 176c-8.8 0-16-7.2-16-16L80 48zM0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-245.5c0-17-6.7-33.3-18.7-45.3L354.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96zM296 328a72 72 0 1 1 -144 0 72 72 0 1 1 144 0zm-72-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176z" />
    </Icon>
);

export default FloppyDisk;