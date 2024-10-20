
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=sharp-thin wine-glass-empty}
 * @preview ![wine-glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wine-glass-empty.svg)
 */
const WineGlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M30.4 194.1L46.6 16l226.8 0 16.2 178.1C296.5 270.3 236.5 336 160 336S23.5 270.3 30.4 194.1zM168 351.8c82.1-4.4 145-76.2 137.5-159.1L288 0 32 0 14.5 192.7C7 275.5 69.9 347.4 152 351.8L152 496l-80 0-8 0 0 16 8 0 88 0 88 0 8 0 0-16-8 0-80 0 0-144.2z" />
    </Icon>
);

export default WineGlassEmpty;