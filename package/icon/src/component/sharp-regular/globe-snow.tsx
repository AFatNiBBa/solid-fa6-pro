
import { Icon } from "../../index";

/**
 * A component that renders the `globe-snow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=sharp-regular globe-snow}
 * @preview ![globe-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/globe-snow.svg)
 */
const GlobeSnow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 224c0 71-42 132.2-102.6 160l83.3 0c41.5-40.7 67.2-97.3 67.2-160C448 100.3 347.7 0 224 0S0 100.3 0 224c0 62.7 25.7 119.3 67.2 160l83.3 0C90 356.2 48 295 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176zm-96 32l0-16-80-80-80 80 0 16 32 0-48 48 0 16 72 0 0 64 48 0 0-64 72 0 0-16-48-48 32 0zM256 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-200-8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM0 512l448 0-64-96L64 416 0 512z" />
    </Icon>
);

export default GlobeSnow;