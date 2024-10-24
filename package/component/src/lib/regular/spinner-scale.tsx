
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=regular spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 52a12 12 0 1 1 0 24 12 12 0 1 1 0-24zM204 64a52 52 0 1 0 104 0A52 52 0 1 0 204 64zm20 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM480 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 220a36 36 0 1 0 0 72 36 36 0 1 0 0-72zm339.1-88.5a16 16 0 1 1 -22.6-22.6 16 16 0 1 1 22.6 22.6zm28.3-50.9a56 56 0 1 0 -79.2 79.2 56 56 0 1 0 79.2-79.2zM97.6 369.1a32 32 0 1 0 45.3 45.3A32 32 0 1 0 97.6 369.1zm316.8 45.3a32 32 0 1 0 -45.3-45.3 32 32 0 1 0 45.3 45.3zM125.9 125.9a8 8 0 1 1 -11.3-11.3 8 8 0 1 1 11.3 11.3zm28.3-39.6A48 48 0 1 0 86.3 154.2a48 48 0 1 0 67.9-67.9z" />
    </Icon>
);

export default SpinnerScale;