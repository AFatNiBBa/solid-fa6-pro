
import { Icon, generic } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=duotone euro-sign}
 * @preview ![euro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/euro-sign.svg)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 208c0-17.7 14.3-32 32-32l28.3 0c-7.1 20.1-11.3 41.6-12.1 64L32 240c-17.7 0-32-14.3-32-32zm0 96c0-17.7 14.3-32 32-32l16.1 0c.8 22.4 5 43.9 12.1 64L32 336c-17.7 0-32-14.3-32-32zm112.2-64c1.2-23.1 7.5-44.8 17.9-64L256 176c17.7 0 32 14.3 32 32s-14.3 32-32 32l-143.8 0zm0 32L256 272c17.7 0 32 14.3 32 32s-14.3 32-32 32l-125.9 0c-10.4-19.2-16.7-40.9-17.9-64z" />
        <path d="M48 248C48 128.7 144.7 32 264 32l24 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0c-83.9 0-152 68.1-152 152l0 16c0 83.9 68.1 152 152 152l24 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0C144.7 480 48 383.3 48 264l0-16z" />
    </Icon>
);

export default EuroSign;