
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bin-bottles-recycle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bin-bottles-recycle?s=sharp-duotone-solid bin-bottles-recycle}
 * @preview ![bin-bottles-recycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bin-bottles-recycle.svg)
 */
const BinBottlesRecycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 144l0 48 320 0 0-48-32.4-16.2L256 96 128 96 32 144zM112 32l0 32 16 0 128 0 16 0 0-32-16 0 0-32L128 0l0 32-16 0zM321.8 93.1l44.5 22.3 17.7 8.8 0 19.8 0 48 191.6 0 0-56 0-41.9-64-30 0-64.1-128 0 0 64.1-61.8 29z" />
        <path d="M0 224l640 0 0 64-32 0L576 512 64 512 32 288 0 288l0-64zm295.4 64l-4.8 7.1-25.6 38.4 27.1 17L312.6 320l14.8 0 21.2 32.1 27.1-17-26.3-40-4.7-7.2-8.6 0-32 0-8.6 0zm70.7 90.9l17.1 25.9 0 11.2-45.5 0 0 32 61.5 0 16 0 0-16 0-32 0-4.8-2.6-4-19.3-29.3-27.1 17zM256 416l0-11.2 18.5-27.7-27.1-17-20.6 31-2.7 4 0 4.8 0 32 0 16 16 0 65.7 0 0-32L256 416z" />
    </Icon>
);

export default BinBottlesRecycle;