
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=sharp-thin chess-bishop}
 * @preview ![chess-bishop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-bishop.svg)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M88 0l8 0L224 0l8 0 0 8 0 48 0 8-8 0-4.8 0c22.1 23.5 44.7 52.7 62.9 83.4c21.8 36.9 37.9 77 37.9 112.5c0 33.1-12.4 81.3-56 111.8l0 12.3-16 0 0-16.5 0-4.3 3.6-2.4c40.5-26.4 52.4-70.2 52.4-100.9c0-24.6-8.9-52.9-23.1-81.4L173.7 285.7l-5.7 5.7L156.7 280l5.7-5.7L273 163.7c-1.5-2.7-3.1-5.4-4.7-8.1c-21.2-35.8-48.7-69.5-73.8-93.9L180.4 48l19.7 0L216 48l0-32L104 16l0 32 15.9 0 19.7 0L125.4 61.7c-25.1 24.3-52.6 58.1-73.8 93.9C30.3 191.6 16 228.7 16 259.9c0 30.6 11.9 74.5 52.4 100.9l3.6 2.4 0 4.3L72 384l-16 0 0-12.3C12.4 341.2 0 293 0 259.9c0-35.5 16-75.6 37.9-112.5c18.2-30.7 40.9-60 62.9-83.4L96 64l-8 0 0-8L88 8l0-8zM16 496l288 0 0-20.5L264.9 432 55.1 432 16 475.5 16 496zM0 496l0-26.7L48 416l224 0 48 53.3 0 26.7 0 16-16 0L16 512 0 512l0-16z" />
    </Icon>
);

export default ChessBishop;