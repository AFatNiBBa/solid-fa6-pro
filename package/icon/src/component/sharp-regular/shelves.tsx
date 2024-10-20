
import { Icon } from "../../index";

/**
 * A component that renders the `shelves` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=sharp-regular shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 0l0 24 0 136 544 0 0-136 0-24 48 0 0 24 0 136 0 24 0 24 0 208 0 24 0 24 0 24 0 24-48 0 0-24 0-24L48 464l0 24 0 24L0 512l0-24 0-24 0-24 0-24L0 208l0-24 0-24L0 24 0 0 48 0zm0 416l544 0 0-208L48 208l0 208zM352 0L480 0l0 128-128 0L352 0zM224 256l0 128L96 384l0-128 128 0zm160 0l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Shelves;