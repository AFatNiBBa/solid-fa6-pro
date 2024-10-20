
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=duotone wand-magic}
 * @preview ![wand-magic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wand-magic.svg)
 */
const WandMagic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M284.7 124.7l39.6 39.6 105-105 23.3 23.3-105 105c13.2 13.2 26.4 26.4 39.6 39.6c36.9-36.9 73.8-73.8 110.7-110.7c18.7-18.7 18.7-49.1 0-67.9L463.3 14.1C453.9 4.7 441.7 0 429.4 0s-24.6 4.7-33.9 14.1L284.7 124.7z" />
        <path d="M387.2 227.2L284.7 124.7 14.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L387.2 227.2z" />
    </Icon>
);

export default WandMagic;