
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=sharp-light gauge-low}
 * @preview ![gauge-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gauge-low.svg)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-18.6 7.9-35.3 20.5-47L129.9 151.6l-7.6-14.1 28.2-15.2 7.6 14.1 82.6 153.4c4.9-1.2 10-1.8 15.3-1.8c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM120 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
    </Icon>
);

export default GaugeLow;