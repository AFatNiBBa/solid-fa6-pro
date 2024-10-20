
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-light minimize}
 * @preview ![minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/minimize.svg)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M43.3 20.7l96 96 46.1-46.1L192 64l16-16 16 16 0 13.3L224 192l0 32-32 0L77.3 224 64 224 48 208l16-16 6.6-6.6 46.1-46.1-96-96L9.4 32 32 9.4 43.3 20.7zm448 22.6l-96 96 46.1 46.1L448 192l16 16-16 16-13.3 0L320 224l-32 0 0-32 0-114.7L288 64l16-16 16 16 6.6 6.6 46.1 46.1 96-96L480 9.4 502.6 32 491.3 43.3zm-352 352l-96 96L32 502.6 9.4 480l11.3-11.3 96-96L70.6 326.6 64 320 48 304l16-16 13.3 0L192 288l32 0 0 32 0 114.7 0 13.3-16 16-16-16-6.6-6.6-46.1-46.1zm233.4 0l-46.1 46.1L320 448l-16 16-16-16 0-13.3L288 320l0-32 32 0 114.7 0 13.3 0 16 16-16 16-6.6 6.6-46.1 46.1 96 96L502.6 480 480 502.6l-11.3-11.3-96-96zM192 109.3L109.3 192l82.7 0 0-82.7zm0 293.5l0-82.7-82.7 0L192 402.7zM320 320l0 82.7L402.7 320 320 320zm0-210.7l0 82.7 82.7 0L320 109.3z" />
    </Icon>
);

export default Minimize;