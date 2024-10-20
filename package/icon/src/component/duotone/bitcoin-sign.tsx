
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=duotone bitcoin-sign}
 * @preview ![bitcoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bitcoin-sign.svg)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M48 32l0 32 64 0 0-32C112 14.3 97.7 0 80 0S48 14.3 48 32zm0 416l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32-64 0zM144 32l0 32 32 0c1.4 0 2.7 0 4.1 .1s2.7 .1 4.1 .2c2.7 .2 5.4 .5 8 .9c5.3 .8 10.5 1.9 15.5 3.4c.2-1.5 .3-3 .3-4.5l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 416l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32-64 0z" />
        <path d="M64 224l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128l0 96zM0 265.7L0 224 0 101.6C0 80.8 16.8 64 37.6 64L176 64c61.9 0 112 50.1 112 112c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112L41.7 448C18.7 448 0 429.3 0 406.3L0 288l0-22.3zM176 288L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default BitcoinSign;