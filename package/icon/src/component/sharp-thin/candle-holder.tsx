
import { Icon } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=sharp-thin candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 176c-35.3 0-64-28.7-64-64c0-7.9 3.4-17.9 10.3-29.6c6.7-11.5 16-23 25.5-33.6c9.5-10.5 19.1-19.6 26.4-26.1L160 21l1.8 1.6c7.2 6.5 16.8 15.6 26.4 26.1c9.6 10.6 18.8 22.1 25.5 33.6C220.6 94.1 224 104.1 224 112c0 35.3-28.7 64-64 64zM160 0s-80 64-80 112c0 44.2 35.8 80 80 80s80-35.8 80-80C240 64 160 0 160 0zM112 240l16 0 0 48 0 8 16 0 0-8 0-48 64 0c17.7 0 32 14.3 32 32l0 224L80 496l0-224c0-17.7 14.3-32 32-32zM256 496l0-224c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 224L8 496l-8 0 0 16 8 0 56 0 16 0 160 0 16 0 128 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48L256 496zm80-48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default CandleHolder;