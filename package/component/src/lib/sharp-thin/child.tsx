
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=sharp-thin child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM160 0a64 64 0 1 1 0 128A64 64 0 1 1 160 0zM96.1 160l4.8 0 118.2 0 4.8 0 2.3 4.2 76.9 144 3.8 7.1-14.1 7.5-3.8-7.1L214.3 176l-108.6 0L31.1 315.8l-3.8 7.1-14.1-7.5 3.8-7.1 76.9-144 2.3-4.2zM96 288l0 208 32 0 0-120 0-8 8 0 48 0 8 0 0 8 0 120 32 0 0-208 0-8 16 0 0 8 0 216 0 8-8 0-48 0-8 0 0-8 0-120-32 0 0 120 0 8-8 0-48 0-8 0 0-8 0-216 0-8 16 0 0 8z" />
    </Icon>
);

export default Child;