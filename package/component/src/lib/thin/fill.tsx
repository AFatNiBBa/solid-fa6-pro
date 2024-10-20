
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=thin fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M45.7 2.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L139.7 119 30.6 228.1c-37.5 37.5-37.5 98.3 0 135.8L148.1 481.4c37.5 37.5 98.3 37.5 135.8 0L485.7 279.6c21.9-21.9 21.9-57.3 0-79.2L311.6 26.3c-21.9-21.9-57.3-21.9-79.2 0L151 107.7 45.7 2.3zM151 130.3l91.3 91.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L162.3 119l81.4-81.4c15.6-15.6 40.9-15.6 56.6 0L474.3 211.7c15.6 15.6 15.6 40.9 0 56.6L454.6 288 18.9 288c1.8-17.7 9.4-35 23-48.6L151 130.3zM41.9 352.6C28.4 339 20.7 321.7 18.9 304l419.7 0L272.6 470.1c-31.2 31.2-81.9 31.2-113.1 0L41.9 352.6z" />
    </Icon>
);

export default Fill;