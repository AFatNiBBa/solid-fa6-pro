
import { Icon } from "../../index";

/**
 * A component that renders the `coin-blank` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-blank?s=regular coin-blank}
 * @preview ![coin-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/coin-blank.svg)
 */
const CoinBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 304c64 0 119.6-14.7 157.5-36c39.4-22.2 50.5-45.3 50.5-60s-11.1-37.8-50.5-60C375.6 126.7 320 112 256 112s-119.6 14.7-157.5 36C59.1 170.2 48 193.3 48 208s11.1 37.8 50.5 60c37.9 21.3 93.5 36 157.5 36zM0 208C0 128.5 114.6 64 256 64s256 64.5 256 144l0 48 0 64c0 70.7-114.6 128-256 128S0 390.7 0 320l0-64 0-48zM256 352c-13.6 0-27-.6-40-1.7l0 48c12.9 1.1 26.3 1.7 40 1.7s27.1-.6 40-1.7l0-48c-13 1.1-26.4 1.7-40 1.7zM120 330l0 47.7c18.7 7 40.3 12.7 64 16.6l0-48.1c-22.8-3.8-44.3-9.2-64-16.2zM88 316.7C73 309.3 59.6 301 48 292l0 28c0 6.8 6.2 24.2 40 43.1l0-46.5zm240 29.6l0 48.1c23.7-3.9 45.3-9.6 64-16.6l0-47.7c-19.7 7-41.2 12.5-64 16.2zM464 320l0-28c-11.6 9.1-25 17.4-40 24.7l0 46.5c33.8-18.9 40-36.3 40-43.1z" />
    </Icon>
);

export default CoinBlank;