
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple?s=sharp-light link-simple}
 * @preview ![link-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/link-simple.svg)
 */
const LinkSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 256C0 167.6 71.6 96 160 96l80 0 16 0 0 32-16 0-80 0C89.3 128 32 185.3 32 256s57.3 128 128 128l80 0 16 0 0 32-16 0-80 0C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160l-80 0-16 0 0-32 16 0 80 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-80 0-16 0 0-32 16 0 80 0c88.4 0 160 71.6 160 160zM152 240l272 0 16 0 0 32-16 0-272 0-16 0 0-32 16 0z" />
    </Icon>
);

export default LinkSimple;