
import { Icon } from "../../index";

/**
 * A component that renders the `rupiah-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rupiah-sign?s=regular rupiah-sign}
 * @preview ![rupiah-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rupiah-sign.svg)
 */
const RupiahSign: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l96 0c75.1 0 136 60.9 136 136c0 59.4-38.1 109.9-91.1 128.4l57.5 151c4.7 12.4-1.5 26.3-13.9 31s-26.3-1.5-31-13.9L116.4 304 48 304l0 152c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 280 0 56zM48 256l72 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L48 80l0 176zm264-96l88 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-64 0 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-304c0-13.3 10.7-24 24-24zm88 176c35.3 0 64-28.7 64-64s-28.7-64-64-64l-64 0 0 128 64 0z" />
    </Icon>
);

export default RupiahSign;