
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kite` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kite?s=sharp-duotone-solid kite}
 * @preview ![kite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kite.svg)
 */
const Kite: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 48 24 0 48 0 0 110 24 10 24-10 0-134 0-24-24 0-72 0L0 128zM72 322l0 166 0 24 24 0 56 0 9.9 0 7-7 96-96 .4-.4L640 321.4l0-1.4c-53.3-53.3-106.7-106.7-160-160c-86.3 86.3-172.5 172.5-258.8 258.8c3.4-14.7 6.9-29.5 10.3-44.2l-.4 .4-89 89L120 464l0-142L96 312 72 322zM320 0c53.3 53.3 106.7 106.7 160 160C533.3 106.7 586.7 53.3 640 0C533.3 0 426.7 0 320 0z" />
        <path d="M480 160L221.2 418.8s0 0 0 0L318.6 0 320 0 480 160zM640 0l0 320L480 160 640 0zm0 0s0 0 0 0s0 0 0 0s0 0 0 0zM0 256l96 40 96-40 0 96L96 312 0 352l0-96z" />
    </Icon>
);

export default Kite;