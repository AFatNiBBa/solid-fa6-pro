
import { Icon } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=solid candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 192c-44.2 0-80-35.8-80-80c0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80zm-32 32l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0c17.7 0 32 14.3 32 32l0 208 52.1 0c-2.7-7.5-4.1-15.6-4.1-24c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l40 0 0-208c0-17.7 14.3-32 32-32l32 0zM400 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CandleHolder;