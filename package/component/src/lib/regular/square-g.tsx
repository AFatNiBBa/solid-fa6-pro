
import { Icon } from "../../index";

/**
 * A component that renders the `square-g` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-g?s=regular square-g}
 * @preview ![square-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-g.svg)
 */
const SquareG: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM144 256c0 44.2 35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L248 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c13.3 0 24 10.7 24 24c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6c9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C263.2 183.7 244.5 176 224 176c-44.2 0-80 35.8-80 80z" />
    </Icon>
);

export default SquareG;