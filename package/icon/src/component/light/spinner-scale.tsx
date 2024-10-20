
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=light spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 44a20 20 0 1 1 0 40 20 20 0 1 1 0-40zM204 64a52 52 0 1 0 104 0A52 52 0 1 0 204 64zm28 384a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zM472 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM76 256a12 12 0 1 1 -24 0 12 12 0 1 1 24 0zM64 212a44 44 0 1 0 0 88 44 44 0 1 0 0-88zm344.7-74.8a24 24 0 1 1 -33.9-33.9 24 24 0 1 1 33.9 33.9zm22.6-56.6a56 56 0 1 0 -79.2 79.2 56 56 0 1 0 79.2-79.2zM92.2 391.8a28 28 0 1 0 56 0 28 28 0 1 0 -56 0zM384 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM131.5 131.5a16 16 0 1 1 -22.6-22.6 16 16 0 1 1 22.6 22.6zm22.6-45.3A48 48 0 1 0 86.3 154.2a48 48 0 1 0 67.9-67.9z" />
    </Icon>
);

export default SpinnerScale;