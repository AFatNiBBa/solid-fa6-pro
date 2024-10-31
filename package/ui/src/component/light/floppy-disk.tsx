
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=light floppy-disk}
 * @preview ![floppy-disk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/floppy-disk.svg)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 96c0-17.7 14.3-32 32-32l0 96c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-94.2c4.5 1.6 8.7 4.2 12.1 7.6l74.5 74.5c6 6 9.4 14.1 9.4 22.6L416 416c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96zM96 64l192 0 0 96L96 160l0-96zM0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-245.5c0-17-6.7-33.3-18.7-45.3L354.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96zM272 320a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default FloppyDisk;