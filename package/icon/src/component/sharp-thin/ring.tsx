
import { Icon } from "../../index";

/**
 * A component that renders the `ring` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=sharp-thin ring}
 * @preview ![ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ring.svg)
 */
const Ring: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 181.1l0 8.5c.4 .6 .9 1.3 1.6 2.1c2 2.7 5.1 6.5 9.5 11.2c8.7 9.3 22.1 21.9 41.1 34.5c.3 .2 .6 .4 1 .6C110.2 213.8 171 192 256 192c85 0 145.8 21.9 186.9 46c.3-.2 .7-.4 1-.7c19-12.6 32.5-25.2 41.1-34.5c4.3-4.7 7.4-8.5 9.5-11.2c.6-.8 1.1-1.5 1.6-2.1l0-8.5C473.4 150.4 397.4 80 256 80S38.6 150.4 16 181.1zm411.2 66.4C388.6 226.5 332.9 208 256 208c-76.9 0-132.6 18.5-171.2 39.5C123 268.9 178.7 288 256 288c77.3 0 133-19.1 171.2-40.5zM16 330.9C38.6 361.6 114.6 432 256 432s217.4-70.4 240-101.1l0-116.5c-9.4 10.1-23.6 23.2-43.3 36.2C412.2 277.5 348.6 304 256 304s-156.2-26.5-196.7-53.3C39.6 237.6 25.4 224.5 16 214.5l0 116.5zM512 176l0 160c-21.3 32-102.4 112-256 112S21.3 368 0 336L0 176C21.3 144 102.4 64 256 64s234.7 80 256 112z" />
    </Icon>
);

export default Ring;