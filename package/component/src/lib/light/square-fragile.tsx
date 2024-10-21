
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=light square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 32l0 80c0 44.2 35.8 80 80 80s80-35.8 80-80l0-80-73.4 0 20.7 20.7c3.4 3.4 5.1 8.1 4.6 12.9s-3.1 9.1-7 11.7l-30.2 20.1 31.5 26.3c6.8 5.7 7.7 15.7 2 22.5s-15.7 7.7-22.5 2l-48-40c-3.9-3.2-6-8.1-5.7-13.1s2.9-9.7 7.1-12.5l31.8-21.2L185.4 128 144 128zm-1.1-32l162.2 0c17.1 0 30.9 13.8 30.9 30.9l0 81.1c0 56.4-41.7 103.1-96 110.9l0 65.1 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-65.1c-54.3-7.8-96-54.4-96-110.9l0-81.1c0-17.1 13.8-30.9 30.9-30.9z" />
    </Icon>
);

export default SquareFragile;