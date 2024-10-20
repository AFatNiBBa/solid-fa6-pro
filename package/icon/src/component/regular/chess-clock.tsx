
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=regular chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 56c0-13.3-10.7-24-24-24L120 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32-88 0c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64l-32 0 0-16c0-8.8-7.2-16-16-16L400 80c-8.8 0-16 7.2-16 16l0 16-184 0 0-32 32 0c13.3 0 24-10.7 24-24zM576 160c8.8 0 16 7.2 16 16l0 240c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-240c0-8.8 7.2-16 16-16l512 0zM200 400a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM184 240c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48zM513.5 369.5A104 104 0 1 0 366.5 222.5 104 104 0 1 0 513.5 369.5zM490.9 245.1c6.2 6.2 6.2 16.4 0 22.6L457 301.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default ChessClock;