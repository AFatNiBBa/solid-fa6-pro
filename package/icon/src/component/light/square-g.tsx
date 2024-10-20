
import { Icon } from "../../index";

/**
 * A component that renders the `square-g` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-g?s=light square-g}
 * @preview ![square-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-g.svg)
 */
const SquareG: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 256c0 53 43 96 96 96c47.6 0 87.1-34.6 94.7-80L256 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c8.8 0 16 7.2 16 16c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6c6.6 5.9 7.1 16 1.3 22.6s-16 7.1-22.6 1.3c-17-15.2-39.4-24.4-64-24.4c-53 0-96 43-96 96z" />
    </Icon>
);

export default SquareG;