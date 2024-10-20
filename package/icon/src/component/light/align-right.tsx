
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=light align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48c8.8 0 16 7.2 16 16s-7.2 16-16 16L176 80c-8.8 0-16-7.2-16-16s7.2-16 16-16l256 0zm0 128c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 208c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0zm16 144c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l256 0c8.8 0 16 7.2 16 16zM432 432c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 464c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0z" />
    </Icon>
);

export default AlignRight;