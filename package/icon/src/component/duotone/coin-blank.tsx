
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coin-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-blank?s=duotone coin-blank}
 * @preview ![coin-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/coin-blank.svg)
 */
const CoinBlank: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208c0 79.5 114.6 144 256 144s256-64.5 256-144s-114.6-144-256-144S0 128.5 0 208z" />
        <path d="M48 331c-18.3-11.5-34.8-25.2-48-40.9L0 320c0 27.9 17.8 53.6 48 74.6L48 331zm32 17.3L80 413c27.1 12.8 59.8 22.7 96 28.7l0-64.3c-35.1-6-67.6-15.9-96-29zM256 448c-16.4 0-32.5-.8-48-2.2l0-64.1c15.7 1.6 31.7 2.4 48 2.4s32.3-.8 48-2.4l0 64.1c-15.5 1.5-31.6 2.2-48 2.2zm80-70.7l0 64.3c36.2-6 68.9-15.9 96-28.7l0-64.7c-28.4 13.2-60.9 23-96 29zM512 320c0 27.9-17.8 53.6-48 74.6l0-63.7c18.3-11.5 34.8-25.2 48-40.9l0 29.9z" />
    </Icon>
);

export default CoinBlank;