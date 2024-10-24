
import { Icon } from "../../index";

/**
 * A component that renders the `shelves` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=regular shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0C37.3 0 48 10.7 48 24l0 136 544 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160 0 256 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24L48 464l0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48L0 184 0 24C0 10.7 10.7 0 24 0zM48 416l544 0 0-208L48 208l0 208zM352 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM128 256l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm160 0l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Shelves;