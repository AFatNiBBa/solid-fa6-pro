
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk-circle-xmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-circle-xmark?s=solid floppy-disk-circle-xmark}
 * @preview ![floppy-disk-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/floppy-disk-circle-xmark.svg)
 */
const FloppyDiskCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l232.2 0c-17.6-21.4-30.3-46.9-36.3-75c-10.2 6.9-22.6 11-35.9 11c-35.3 0-64-28.7-64-64s28.7-64 64-64c16.8 0 32.1 6.5 43.6 17.1C292.9 239 357 192 432 192c5.4 0 10.7 .2 16 .7l0-19.5c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L409.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L432 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default FloppyDiskCircleXmark;