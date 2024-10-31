
import { Icon } from "../../index";

/**
 * A component that renders the `explosion` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=sharp-light explosion}
 * @preview ![explosion](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/explosion.svg)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 16l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zM16 480l177.3 0c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80L560 480l16 0 0 32-16 0-192 0-160 0L16 512 0 512l0-32 16 0zm210 0l124 0c-7.1-27.6-32.2-48-62-48s-54.9 20.4-62 48zM75.9 347.7l18.9 1.6L128 352l-6.5-32.7L105.6 240 96 192l38.6 30.1 76.9 59.8L240 304l6.5-35.5L272 128l32 0 23.4 117.2L336 288l25.6-35.4L490.7 73.8 544 0 520.1 87.8 457 319.1 448 352l33.9-2.8 18.2-1.5L544 344l-27.5 34.4L460.8 448l-41 0 52.7-65.9-21.9 1.8-45.6 3.8 12-44.1 49.6-182L361.9 306.7 319 366.2l-14.4-71.9-15.9-79.4-17.3 94.9-9.4 52-41.7-32.4-76.1-59.2 15.1 75.7 8.3 41.7-42.4-3.5-21.9-1.8L156.2 448l-41 0L59.5 378.4 32 344l43.9 3.7z" />
    </Icon>
);

export default Explosion;