
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=duotone triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 418c0 51.9 42.1 94 94 94L450 512c51.9 0 94-42.1 94-94c0-17.8-5-35.2-14.5-50.2L430.7 211.3l-46.4 46.4 91.1 144.2c3 4.8 4.6 10.4 4.6 16c0 16.6-13.5 30-30 30L126 448c-16.6 0-30-13.5-30-30c0-5.7 1.6-11.2 4.6-16L266 140.1c4.8-7.6 13.1-12.1 22-12.1s17.3 4.6 22 12.1l48 75.9c15.5-15.5 30.9-30.9 46.4-46.4L364.1 106C353.6 89.2 338 76.7 320 69.9L320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 37.9c-18 6.8-33.6 19.4-44.1 36.1L46.5 367.7C37 382.8 32 400.2 32 418z" />
        <path d="M537 105c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L306.8 267.2c-5.9-2.1-12.2-3.2-18.8-3.2c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56c0-6.6-1.1-12.9-3.2-18.8L537 105z" />
    </Icon>
);

export default TriangleInstrument;