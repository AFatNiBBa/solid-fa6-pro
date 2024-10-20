
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=thin spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 28a36 36 0 1 1 0 72 36 36 0 1 1 0-72zM204 64a52 52 0 1 0 104 0A52 52 0 1 0 204 64zm52 368a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-32 16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 272a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm32-16a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM88 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM64 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm356-67.5A40 40 0 1 1 363.5 92 40 40 0 1 1 420 148.5zm11.3-67.9a56 56 0 1 0 -79.2 79.2 56 56 0 1 0 79.2-79.2zM131.5 380.5a16 16 0 1 1 -22.6 22.6 16 16 0 1 1 22.6-22.6zM97.6 369.1a32 32 0 1 0 45.3 45.3A32 32 0 1 0 97.6 369.1zm282.8 33.9a16 16 0 1 1 22.6-22.6 16 16 0 1 1 -22.6 22.6zm33.9 11.3a32 32 0 1 0 -45.3-45.3 32 32 0 1 0 45.3 45.3zM142.9 142.9A32 32 0 1 1 97.6 97.6a32 32 0 1 1 45.3 45.3zm11.3-56.6A48 48 0 1 0 86.3 154.2a48 48 0 1 0 67.9-67.9z" />
    </Icon>
);

export default SpinnerScale;