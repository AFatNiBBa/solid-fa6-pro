
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-check?s=sharp-duotone-solid shield-check}
 * @preview ![shield-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-check.svg)
 */
const ShieldCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM126.1 256L160 222.1l1 1 16 16 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16l1-1L385.9 192l-1 1c-5.3 5.3-10.7 10.7-16 16c-42.7 42.7-85.3 85.3-128 128c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-21.3-21.3-42.7-42.7-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
        <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default ShieldCheck;