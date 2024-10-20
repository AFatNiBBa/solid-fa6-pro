
import { Icon } from "../../index";

/**
 * A component that renders the `integral` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/integral?s=thin integral}
 * @preview ![integral](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/integral.svg)
 */
const Integral: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M220 16c-28.7 0-52 23.3-52 52l0 376c0 37.6-30.4 68-68 68s-68-30.4-68-68l0-20c0-4.4 3.6-8 8-8s8 3.6 8 8l0 20c0 28.7 23.3 52 52 52s52-23.3 52-52l0-376c0-37.6 30.4-68 68-68s68 30.4 68 68l0 20c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-20c0-28.7-23.3-52-52-52z" />
    </Icon>
);

export default Integral;