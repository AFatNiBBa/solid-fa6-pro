
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-heart?s=sharp-duotone-solid shield-heart}
 * @preview ![shield-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-heart.svg)
 */
const ShieldHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zm352 86.3c0-.4 0-.3 0 0z" />
        <path d="M203.2 160c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L256 352.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0z" />
    </Icon>
);

export default ShieldHeart;