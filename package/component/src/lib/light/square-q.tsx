
import { Icon } from "../../index";

/**
 * A component that renders the `square-q` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-q?s=light square-q}
 * @preview ![square-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-q.svg)
 */
const SquareQ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 256c0 53 43 96 96 96c20.7 0 39.9-6.6 55.6-17.7l-50.9-50.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l50.9 50.9C313.4 295.9 320 276.7 320 256c0-53-43-96-96-96s-96 43-96 96zm224 0c0 29.6-10 56.8-26.9 78.5l22.2 22.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-22.2-22.2C280.8 374 253.6 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </Icon>
);

export default SquareQ;