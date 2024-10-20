
import { Icon } from "../../index";

/**
 * A component that renders the `kite` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kite?s=sharp-light kite}
 * @preview ![kite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/kite.svg)
 */
const Kite: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M270.9 346.5L457.4 160 341.2 43.9 270.9 346.5zm-14.9 64.2l-5.2 1.2-95.4 95.4-4.7 4.7-6.6 0-48 0-16 0 0-16 0-179.7L24.2 349.7 0 364.3 0 336l0-96 0-28.3 24.2 14.5L80 259.7 80 160l-64 0L0 160l0-32 16 0 80 0 16 0 0 16 0 115.7 55.8-33.5L192 211.7l0 28.3 0 96 0 28.3-24.2-14.5L112 316.3 112 480l25.4 0L228 389.3l1.2-5.2 3.6-15.3 80-344L318.6 0 344 0 608 0l32 0 0 32 0 264 0 25.4-24.8 5.8-344 80-15.3 3.6zM480 182.6L293.5 369.1l302.6-70.4L480 182.6zM502.6 160L608 265.4l0-210.7L502.6 160zM374.6 32L480 137.4 585.4 32 374.6 32zM32 268.3l0 39.5L64.9 288 32 268.3zm128 39.5l0-39.5L127.1 288 160 307.7z" />
    </Icon>
);

export default Kite;