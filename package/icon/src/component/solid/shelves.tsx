
import { Icon } from "../../index";

/**
 * A component that renders the `shelves` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=solid shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 0C49.7 0 64 14.3 64 32l0 128 512 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 0 256 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L64 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L0 192 0 32C0 14.3 14.3 0 32 0zM64 416l512 0 0-192L64 224l0 192zM352 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM128 256l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm160 0l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Shelves;