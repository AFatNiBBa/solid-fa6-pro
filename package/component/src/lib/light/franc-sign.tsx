
import { Icon } from "../../index";

/**
 * A component that renders the `franc-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=light franc-sign}
 * @preview ![franc-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/franc-sign.svg)
 */
const FrancSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M104 32C81.9 32 64 49.9 64 72l0 136 0 112-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 112c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 320l0-96 176 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 192 96 72c0-4.4 3.6-8 8-8l200 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L104 32z" />
    </Icon>
);

export default FrancSign;