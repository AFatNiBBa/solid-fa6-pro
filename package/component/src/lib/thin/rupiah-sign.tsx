
import { Icon } from "../../index";

/**
 * A component that renders the `rupiah-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rupiah-sign?s=thin rupiah-sign}
 * @preview ![rupiah-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rupiah-sign.svg)
 */
const RupiahSign: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 72C0 49.9 17.9 32 40 32l80 0c75.1 0 136 60.9 136 136c0 68.7-50.9 125.5-117.1 134.7l60.6 166.6c1.5 4.2-.6 8.7-4.8 10.2s-8.7-.6-10.3-4.8L122.4 304c-.8 0-1.6 0-2.4 0L16 304l0 168c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 296 0 72zM16 288l104 0c66.3 0 120-53.7 120-120s-53.7-120-120-120L40 48C26.7 48 16 58.7 16 72l0 216zm288-88l0 168 96 0c53 0 96-43 96-96s-43-96-96-96l-72 0c-13.3 0-24 10.7-24 24zm96 184l-96 0 0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-304c0-22.1 17.9-40 40-40l72 0c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
    </Icon>
);

export default RupiahSign;