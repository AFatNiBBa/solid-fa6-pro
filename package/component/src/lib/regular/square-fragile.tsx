
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=regular square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 38.3c0-12.3 10-22.3 22.3-22.3l25.7 0 32 64-32 32 80 64-32-64 48-32-32-64 57.7 0c12.3 0 22.3 10 22.3 22.3l0 89.7c0 47.6-34.6 87.1-80 94.7l0 49.3 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-49.3c-45.4-7.6-80-47.1-80-94.7l0-89.7z" />
    </Icon>
);

export default SquareFragile;