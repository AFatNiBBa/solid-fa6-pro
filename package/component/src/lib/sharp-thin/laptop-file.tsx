
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=sharp-thin laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 16L80 16l0 272 240 0 0 16L80 304l-16 0-48 0 0 25.4L54.6 368 320 368l0 16L48 384 0 336l0-32 0-16 16 0 48 0L64 16 64 0 80 0 496 0l16 0 0 16 0 80-16 0 0-80zM640 248l0 248 0 16-16 0-256 0-16 0 0-16 0-352 0-16 16 0 152 0 8 0L640 240l0 8zM528 150.6l0 89.4 89.4 0L528 150.6zM512 144l-144 0 0 352 256 0 0-240-104 0-8 0 0-8 0-104z" />
    </Icon>
);

export default LaptopFile;