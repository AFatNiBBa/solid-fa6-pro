
import { Icon } from "../../index";

/**
 * A component that renders the `rupiah-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rupiah-sign?s=light rupiah-sign}
 * @preview ![rupiah-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rupiah-sign.svg)
 */
const RupiahSign: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 80C0 53.5 21.5 32 48 32l64 0c79.5 0 144 64.5 144 144c0 65.6-43.9 121-103.9 138.3l54.8 144c3.1 8.3-1 17.5-9.3 20.6s-17.5-1-20.6-9.3L119.9 319.8c-2.6 .1-5.3 .2-7.9 .2l-80 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 304 0 80zM32 288l80 0c61.9 0 112-50.1 112-112s-50.1-112-112-112L48 64c-8.8 0-16 7.2-16 16l0 208zm288-80l0 144 80 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-64 0c-8.8 0-16 7.2-16 16zm16-48l64 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-80 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-288c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default RupiahSign;