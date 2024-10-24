
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-thin cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 0l-8 0 0 8 0 88L64 96 3.2 400 0 416l16.3 0 415.4 0 16.3 0-3.2-16L384 96l-64 0 0-88 0-8-8 0L136 0zM304 96L144 96l0-80 160 0 0 80zM136 112l176 0 58.9 0 57.6 288-409 0L77.1 112l58.9 0zm24 336c0 35.3 28.7 64 64 64s64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l-16 0z" />
    </Icon>
);

export default Cowbell;