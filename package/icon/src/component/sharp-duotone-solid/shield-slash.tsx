
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=sharp-duotone-solid shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80.9 159.7c2.9 45.2 13.5 100.1 37 154.2c32.7 75.3 91 150 189.4 192.6L320 512l12.7-5.5c40.8-17.7 74.8-40.9 102.8-67.3L80.9 159.7zm45.3-84.5L496.8 363c9.8-16.1 18.2-32.6 25.3-49C550.5 248.7 560 182.1 560 133c0-7.1-.2-13.8-.6-20.1l-1.2-20.5L539.1 85 331.6 4.5 320 0 308.4 4.5 126.2 75.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ShieldSlash;