
import { Icon } from "../../index";

/**
 * A component that renders the `square-n` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-n?s=regular square-n}
 * @preview ![square-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-n.svg)
 */
const SquareN: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm154.3 40.5L288 294.5 288 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.1-6.3 19.1-15.7 22.5s-20.1 .7-26.6-7L160 217.5 160 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.1 6.3-19.1 15.7-22.5s20.1-.7 26.6 7z" />
    </Icon>
);

export default SquareN;