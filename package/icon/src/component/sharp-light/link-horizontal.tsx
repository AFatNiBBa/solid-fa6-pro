
import { Icon } from "../../index";

/**
 * A component that renders the `link-horizontal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-horizontal?s=sharp-light link-horizontal}
 * @preview ![link-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/link-horizontal.svg)
 */
const LinkHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 64C57.3 64 0 121.3 0 192s57.3 128 128 128l32 0 0-32-32 0c-53 0-96-43-96-96s43-96 96-96l176.1 0c52.9 0 95.9 42.9 95.9 95.9c0 50.3-38.9 92-89 95.6l-8.1 .6 2.3 31.9 8.1-.6C380.2 314.6 432 258.9 432 191.9C432 121.2 374.8 64 304.1 64L128 64zM512 448c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0 0 32 32 0c53 0 96 43 96 96s-43 96-96 96l-176.1 0c-52.9 0-95.9-42.9-95.9-95.9c0-50.3 38.9-92 89-95.6l8.1-.6L334.9 192l-8.1 .6C259.8 197.4 208 253.1 208 320.1C208 390.8 265.2 448 335.9 448L512 448z" />
    </Icon>
);

export default LinkHorizontal;