
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=sharp-light xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 64l0 320 320 0 0-320L128 64zm352 0l0 320 16 0 16 0 0 32-16 0-16 0-32 0-320 0-32 0-16 0-16 0 0-32 16 0 16 0L96 64l0-32 32 0 320 0 32 0 0 32zM32 320l32 0 0 32-32 0 0 96 512 0 0-96-32 0 0-32 32 0 32 0 0 32 0 96 0 32-32 0L32 480 0 480l0-32 0-96 0-32 32 0zM223.4 136.8l11.3 11.3L288 201.4l53.3-53.3 11.3-11.3 22.6 22.6-11.3 11.3L310.6 224l53.3 53.3 11.3 11.3-22.6 22.6-11.3-11.3L288 246.6l-53.3 53.3-11.3 11.3-22.6-22.6 11.3-11.3L265.4 224l-53.3-53.3-11.3-11.3 22.6-22.6z" />
    </Icon>
);

export default XmarkToSlot;