
import { Icon } from "../../index";

/**
 * A component that renders the `coin-vertical` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-vertical?s=solid coin-vertical}
 * @preview ![coin-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/coin-vertical.svg)
 */
const CoinVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 256c0 141.4-64.5 256-144 256S0 397.4 0 256S64.5 0 144 0s144 114.6 144 256zM184.2 425.4c11.4-12 20.1-27.7 26.8-44.4c13.4-33.6 21-77.8 21-125s-7.6-91.4-21-125c-6.7-16.7-15.4-32.4-26.8-44.4C172.7 74.5 156.5 64 136 64s-36.7 10.5-48.2 22.6C76.5 98.6 67.7 114.3 61 131c-13.4 33.6-21 77.8-21 125s7.6 91.4 21 125c6.7 16.7 15.4 32.4 26.8 44.4C99.3 437.5 115.5 448 136 448s36.7-10.5 48.2-22.6zM136 416c-35.3 0-64-71.6-64-160s28.7-160 64-160s64 71.6 64 160s-28.7 160-64 160zm90.1 96c15.6-13.2 29.3-29.7 40.9-48l63.7 0c-21 30.2-46.8 48-74.6 48l-29.9 0zM349 432l-64.7 0c13.2-28.4 23-60.9 29-96l64.3 0c-6 36.2-15.9 68.9-28.7 96zm32.8-128l-64.1 0c1.6-15.7 2.4-31.7 2.4-48s-.8-32.3-2.4-48l64.1 0c1.5 15.5 2.2 31.6 2.2 48s-.8 32.5-2.2 48zm-4.1-128l-64.3 0c-6-35.1-15.9-67.6-29-96L349 80c12.8 27.1 22.7 59.8 28.7 96zm-47-128L267 48c-11.5-18.3-25.2-34.8-40.9-48L256 0c27.9 0 53.6 17.8 74.6 48z" />
    </Icon>
);

export default CoinVertical;