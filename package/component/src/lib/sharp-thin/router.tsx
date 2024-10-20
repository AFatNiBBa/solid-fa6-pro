
import { Icon } from "../../index";

/**
 * A component that renders the `router` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/router?s=sharp-thin router}
 * @preview ![router](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/router.svg)
 */
const Router: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 0c71.4 0 136.7 26 187 69L527.7 80.3C480.3 40.2 419 16 352 16s-128.3 24.2-175.7 64.3L165 69C215.3 26 280.6 0 352 0zm0 112c40.4 0 77.7 13.6 107.4 36.6L448 160c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32l-11.4-11.4c29.7-22.9 67-36.6 107.4-36.6zm8 112l0 8 0 88 200 0 16 0 0 16 0 160 0 16-16 0L16 512 0 512l0-16L0 336l0-16 16 0 328 0 0-88 0-8 16 0zM344 336s0 0 0 0L16 336l0 160 544 0 0-160-200 0s0 0 0 0l-16 0zM208 400l0 32-32 0 0-32 32 0zM80 400l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default Router;