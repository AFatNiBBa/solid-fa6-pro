
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=thin clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 192l0 224c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-224L16 192zm339.3-16L496 176l0-80c0-16.5-8.3-31-21-39.7L355.3 176zm-22.6 0l5.7-5.7 121-121c-3.6-.9-7.4-1.3-11.3-1.3L331.3 48l-5.7 5.7L203.3 176l129.4 0zm-152 0l5.7-5.7L308.7 48 179.3 48l-5.7 5.7L51.3 176l129.4 0zm-152 0l5.7-5.7L156.7 48 64 48C37.5 48 16 69.5 16 96l0 80 12.7 0zM512 96l0 80 0 8 0 8 0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192l0-8 0-8L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64z" />
    </Icon>
);

export default Clapperboard;