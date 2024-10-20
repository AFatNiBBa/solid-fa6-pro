
import { Icon, generic } from "../../index";

/**
 * A component that renders the `transporter-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-2?s=sharp-duotone-solid transporter-2}
 * @preview ![transporter-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/transporter-2.svg)
 */
const Transporter_2: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 48L32 32 48 0 64 32 96 48 64 64 48 96 32 64 0 48zM96 255.5c0 .2 0 .3 0 .5c5.3 0 10.7 0 16 0l288 0 16 0 0 32-16 0-288 0-16 0 0-31.5 0-1zM160 320l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm0 64l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm256-16l32-16 16-32 16 32 32 16-32 16-16 32-16-32-32-16z" />
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-18.4 80l15.4 0 102.2 0 15.4 0 9.6 12 67.3 84-286.7 0 67.3-84 9.6-12zM296 512l-80 0L96 512l0-64 320 0 0 64-120 0zM96 256.5c0-.3 0-.7 0-1l0 1z" />
    </Icon>
);

export default Transporter_2;