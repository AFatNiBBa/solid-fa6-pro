
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=sharp-regular chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32L96 32l0 48 56 0 0 32L48 112 0 112l0 48L0 432l0 48 48 0 544 0 48 0 0-48 0-272 0-48-48 0-48 0 0-32L384 80l0 32-184 0 0-32 56 0 0-48zM592 160l0 272L48 432l0-272 544 0zM200 400a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM184 240l0-16 32 0 0 16 0 48 0 16-32 0 0-16 0-48zM513.5 369.5A104 104 0 1 0 366.5 222.5 104 104 0 1 0 513.5 369.5zM502.2 256.4l-11.3 11.3L457 301.7 445.7 313 423 290.3 434.3 279l33.9-33.9 11.3-11.3 22.6 22.6z" />
    </Icon>
);

export default ChessClock;