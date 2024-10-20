
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disks` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disks?s=light floppy-disks}
 * @preview ![floppy-disks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/floppy-disks.svg)
 */
const FloppyDisks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 352c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-213.5c0-8.5-3.4-16.6-9.4-22.6L396.1 41.4c-3.4-3.4-7.6-6-12.1-7.6l0 78.2c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-80c-17.7 0-32 14.3-32 32l0 288zM352 32L192 32l0 80 160 0 0-80zM192 0L373.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3L512 352c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64L96 64c0-35.3 28.7-64 64-64l32 0zM32 112l0 256c0 61.9 50.1 112 112 112l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-256 0C64.5 512 0 447.5 0 368L0 112c0-8.8 7.2-16 16-16s16 7.2 16 16zM296 304a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-112a72 72 0 1 1 0 144 72 72 0 1 1 0-144z" />
    </Icon>
);

export default FloppyDisks;