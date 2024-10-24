
import { Icon } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=sharp-solid moon-over-sun}
 * @preview ![moon-over-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/moon-over-sun.svg)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM112 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm213 65.7c-50.5 0-91.4-40.5-91.4-90.5c0-36.9 22.3-68.6 54.2-82.7c-10.1-3-20.8-4.6-31.8-4.6c-61.9 0-112 50.1-112 112s50.1 112 112 112c38.7 0 72.8-19.6 92.9-49.4c-7.6 2-15.6 3.1-23.9 3.1z" />
    </Icon>
);

export default MoonOverSun;