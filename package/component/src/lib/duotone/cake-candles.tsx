
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cake-candles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cake-candles?s=duotone cake-candles}
 * @preview ![cake-candles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cake-candles.svg)
 */
const CakeCandles: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288c0-35.3 28.7-64 64-64l64 0 64 0 64 0 64 0 64 0c35.3 0 64 28.7 64 64l0 89.2c-8.4 4-18.1 6.8-28.8 6.8c-35.9 0-67.2-32-67.2-32s-28.1 32-64 32s-64-32-64-32s-28.1 32-64 32s-64-32-64-32s-31.3 32-67.2 32c-10.7 0-20.4-2.8-28.8-6.8L0 288zM56 69.2c0-7.6 2-15 5.8-21.6L86.4 5.5C88.4 2.1 92 0 96 0s7.6 2.1 9.6 5.5l24.5 42.1c3.8 6.5 5.8 14 5.8 21.6l0 2.8c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-2.8zm128 0c0-7.6 2-15 5.8-21.6L214.4 5.5C216.4 2.1 220 0 224 0s7.6 2.1 9.6 5.5l24.5 42.1c3.8 6.5 5.8 14 5.8 21.6l0 2.8c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-2.8zm128 0c0-7.6 2-15 5.8-21.6L342.4 5.5C344.4 2.1 348 0 352 0s7.6 2.1 9.6 5.5l24.5 42.1c3.8 6.5 5.8 14 5.8 21.6l0 2.8c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-2.8z" />
        <path d="M128 176l0 48-64 0 0-48c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 48-64 0 0-48c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 48-64 0 0-48c0-17.7 14.3-32 32-32s32 14.3 32 32zM0 464l0-86.8c8.4 4 18.1 6.8 28.8 6.8C64.7 384 96 352 96 352s28.1 32 64 32s64-32 64-32s28.1 32 64 32s64-32 64-32s31.3 32 67.2 32c10.7 0 20.4-2.8 28.8-6.8l0 86.8c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default CakeCandles;