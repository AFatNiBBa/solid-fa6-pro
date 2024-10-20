
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=sharp-light chess-queen}
 * @preview ![chess-queen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-queen.svg)
 */
const ChessQueen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM176 128l32 0s0 48 48 48s48-48 48-48l32 0 32 0c0 26.2 5.4 52.5 33.8 61.1c13.9 4.2 28.4-2 39.7-11.1L464 160l48 32L418.7 352l-37 0 87.6-150.1-3.5-2.3-4.2 3.4c-14.6 11.7-40.1 25.5-69 16.8c-23.7-7.2-39.1-22.7-47.5-41.5c-2.7-6-4.6-12.2-6-18.3l-9.6 0c-.8 2.1-1.8 4.2-2.8 6.3c-4.9 9.8-12.7 20.6-25.1 28.8C288.9 203.5 273.6 208 256 208s-32.9-4.5-45.5-12.9c-12.4-8.2-20.2-19-25.1-28.8c-1.1-2.1-2-4.2-2.8-6.3l-9.6 0c-1.4 6.1-3.3 12.3-6 18.3c-8.4 18.7-23.8 34.3-47.5 41.5c-28.9 8.7-54.4-5.1-69-16.8l-4.2-3.4-3.5 2.3L130.4 352l-37 0L0 192l48-32 22.5 18c11.3 9.1 25.8 15.3 39.7 11.1c28.4-8.6 33.8-34.8 33.8-61.1l32 0zM96 480l320 0 0-16.7L383.2 416l-254.5 0L96 463.3 96 480zm-32 0l0-26.7L112 384l288 0 48 69.3 0 26.7 0 32-32 0L96 512l-32 0 0-32z" />
    </Icon>
);

export default ChessQueen;