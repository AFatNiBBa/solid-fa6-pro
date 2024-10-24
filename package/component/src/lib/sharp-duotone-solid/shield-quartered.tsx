
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-quartered` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-quartered?s=sharp-duotone-solid shield-quartered}
 * @preview ![shield-quartered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-quartered.svg)
 */
const ShieldQuartered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M17.3 113c-1.7 29.7 .3 68.6 9.1 111c76.6 0 153.1 0 229.7 0c0-74.6 0-149.1 0-223.7L245.1 4.5 37.6 85 18.5 92.5 17.3 113zM256.7 224c0 95.9 0 191.8 0 287.7l12-5.2c98.4-42.6 156.7-117.3 189.4-192.6c13.2-30.3 22.3-60.9 28.3-89.9c-76.6 0-153.1 0-229.7 0z" />
        <path d="M256.7 0s0 0 0 0l11.6 4.5L475.8 85 495 92.5l1.2 20.5c1.7 29.7-.3 68.6-9 111l-230.4 0 0-224zM53.9 313.9C40.7 283.6 31.6 253 25.6 224L256 224l0 288s0 0 0 0l-12.7-5.5C144.9 463.9 86.5 389.2 53.9 313.9z" />
    </Icon>
);

export default ShieldQuartered;