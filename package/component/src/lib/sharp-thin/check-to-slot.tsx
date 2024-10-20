
import { Icon } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=sharp-thin check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48l0 360 352 0 0-360L112 48zm368 0l0 360 32 0 8 0 0 16-8 0-32 0-16 0-352 0-16 0-32 0-8 0 0-16 8 0 32 0L96 48l0-16 16 0 352 0 16 0 0 16zM16 352l48 0 0 16-48 0 0 96 544 0 0-96-48 0 0-16 48 0 16 0 0 16 0 96 0 16-16 0L16 480 0 480l0-16 0-96 0-16 16 0zM373.7 176.3L267 283l-5.7 5.7-5.7-5.7-53.3-53.3-5.7-5.7L208 212.7l5.7 5.7L261.3 266l101-101 5.7-5.7 11.3 11.3-5.7 5.7z" />
    </Icon>
);

export default CheckToSlot;