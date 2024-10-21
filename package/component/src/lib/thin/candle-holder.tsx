
import { Icon } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=thin candle-holder}
 * @preview ![candle-holder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/candle-holder.svg)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 112c0-14.3 9.4-33.2 23.6-52.5C133.2 40.9 149 24.9 157.3 17c.5-.5 1.4-1 2.7-1s2.2 .5 2.7 1c8.3 7.9 24.1 23.9 37.7 42.5C214.6 78.8 224 97.7 224 112c0 35.3-28.7 64-64 64s-64-28.7-64-64zm64 80c44.2 0 80-35.8 80-80c0-39.6-49.1-90.1-66.2-106.6C170.1 1.9 165.2 0 160 0s-10.1 1.9-13.8 5.4C129.1 21.9 80 72.4 80 112c0 44.2 35.8 80 80 80zm-48 48l16 0 0 48c0 4.4 3.6 8 8 8s8-3.6 8-8l0-48 64 0c17.7 0 32 14.3 32 32l0 224L80 496l0-224c0-17.7 14.3-32 32-32zM256 496l0-224c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 224L8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 16 0 160 0 16 0 128 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48L256 496zm80-48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default CandleHolder;