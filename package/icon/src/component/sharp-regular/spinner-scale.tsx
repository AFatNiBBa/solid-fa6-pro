
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=sharp-regular spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M244 52l24 0 0 12c0 6.6-5.4 12-12 12s-12-5.4-12-12l0-12zM204 12l0 40 0 12c0 28.7 23.3 52 52 52s52-23.3 52-52l0-12 0-40-40 0-24 0-40 0zm20 436l0 32 32 0 32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256l0-32-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0-32zM64 220l-36 0 0 36 0 36 36 0c19.9 0 36-16.1 36-36s-16.1-36-36-36zM391.8 97.6l22.6 22.6-11.3 11.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l11.3-11.3zM420 69.3L391.8 41 363.5 69.3 352.2 80.6c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0l11.3-11.3L471 120.2 442.7 92 420 69.3zM97.6 369.1L75 391.8l22.6 22.6L120.2 437l22.6-22.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0zm316.8 45.3L437 391.8l-22.6-22.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L391.8 437l22.6-22.6zM114.6 125.9l-5.7-5.7 11.3-11.3 5.7 5.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0zm39.6-39.6l-5.7-5.7L120.2 52.4 92 80.6 80.6 92 52.4 120.2l28.3 28.3 5.7 5.7c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9z" />
    </Icon>
);

export default SpinnerScale;