
import { Icon } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=light candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 112c0 26.5 21.5 48 48 48s48-21.5 48-48c0-8.8-6.5-24-20.5-43.1C178.4 56.4 168 45.1 160 36.8c-8 8.3-18.4 19.6-27.5 32.1C118.5 88 112 103.2 112 112zm48 80c-44.2 0-80-35.8-80-80c0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80zM0 496c0-8.8 7.2-16 16-16l48 0 0-208c0-26.5 21.5-48 48-48l32 0 64 0c26.5 0 48 21.5 48 48l0 208 72.6 0c-5.4-9.4-8.6-20.3-8.6-32c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64l-128 0-32 0L96 512l-32 0-48 0c-8.8 0-16-7.2-16-16zM128 256l-16 0c-8.8 0-16 7.2-16 16l0 208 128 0 0-208c0-8.8-7.2-16-16-16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48zM384 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CandleHolder;