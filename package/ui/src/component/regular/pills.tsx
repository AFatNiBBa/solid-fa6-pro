
import { Icon } from "../../index";

/**
 * A component that renders the `pills` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=regular pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 80c35.3 0 64 28.7 64 64l0 112L48 256l0-112c0-35.3 28.7-64 64-64zM0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-224c0-61.9-50.1-112-112-112S0 82.1 0 144zM416 432c-61.9 0-112-50.1-112-112c0-22.2 6.5-43 17.7-60.4L476.4 414.3C459 425.5 438.2 432 416 432zM355.6 225.7C373 214.5 393.8 208 416 208c61.9 0 112 50.1 112 112c0 22.2-6.5 43-17.7 60.4L355.6 225.7zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default Pills;