
import { Icon } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=light lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c53 0 96 43 96 96l0 64-192 0 0-64c0-53 43-96 96-96zM96 128l0 64-16 0c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-16 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM80 224l288 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48zm160 88c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default LockKeyhole;