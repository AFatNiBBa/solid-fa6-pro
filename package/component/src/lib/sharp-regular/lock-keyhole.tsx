
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=sharp-regular lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c44.2 0 80 35.8 80 80l0 64-160 0 0-64c0-44.2 35.8-80 80-80zM96 128l0 64-48 0L0 192l0 48L0 464l0 48 48 0 352 0 48 0 0-48 0-224 0-48-48 0-48 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM48 240l352 0 0 224L48 464l0-224zm200 80l0-24-48 0 0 24 0 64 0 24 48 0 0-24 0-64z" />
    </Icon>
);

export default LockKeyhole;