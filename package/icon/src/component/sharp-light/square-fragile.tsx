
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=sharp-light square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm304 96l-73.4 0 20.7 20.7 13.8 13.8-16.2 10.8-30.2 20.1 31.5 26.3L262.5 230 242 254.5l-12.3-10.2-48-40-16.5-13.7 17.8-11.9 31.8-21.2L185.4 128 144 128l0 80c0 44.2 35.8 80 80 80s80-35.8 80-80l0-80zM144 96l160 0 32 0 0 32 0 80c0 56.4-41.7 103.1-96 110.9l0 65.1 48 0 0 32-128 0 0-32 48 0 0-65.1c-54.3-7.8-96-54.4-96-110.9l0-80 0-32 32 0z" />
    </Icon>
);

export default SquareFragile;