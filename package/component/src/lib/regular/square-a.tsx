
import { Icon } from "../../index";

/**
 * A component that renders the `square-a` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a?s=regular square-a}
 * @preview ![square-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-a.svg)
 */
const SquareA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 32c9.1 0 17.4 5.1 21.5 13.3l104 208c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L289.2 336l-130.3 0-17.4 34.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l104-208c4.1-8.1 12.4-13.3 21.5-13.3zm0 77.7L182.8 288l82.3 0L224 205.7z" />
    </Icon>
);

export default SquareA;