
import { Icon } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=sharp-light file-shield}
 * @preview ![file-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-shield.svg)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 192l0 28.7 32-12.4 0-56.3L232 0 32 0 0 0 0 32 0 480l0 32 32 0 320 0 10.1 0c-13.3-9.5-25.3-20.3-36.1-32L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM543.9 301.6C542.1 367.4 508.8 437 448 470.3l0-205.8 95.9 37.1zm-223.8 0L416 264.5l0 205.8c-60.8-33.3-94.1-102.8-95.9-168.6zM432 512c96-32 144-130.2 144-216l0-16.2L432 224 288 279.8l0 16.2c0 85.8 48 184 144 216z" />
    </Icon>
);

export default FileShield;