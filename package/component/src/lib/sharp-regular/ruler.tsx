
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=sharp-regular ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 160l-33.9-33.9L385.9 33.9 352 0 318.1 33.9 33.9 318.1 0 352l33.9 33.9 92.1 92.1L160 512l33.9-33.9L478.1 193.9 512 160zm-67.9 0L160 444.1 67.9 352l34.7-34.7 30.1 30.1L144 358.6 166.6 336l-11.3-11.3-30.1-30.1 41.4-41.4 30.1 30.1L208 294.6 230.6 272l-11.3-11.3-30.1-30.1 41.4-41.4 30.1 30.1L272 230.6 294.6 208l-11.3-11.3-30.1-30.1 41.4-41.4 30.1 30.1L336 166.6 358.6 144l-11.3-11.3-30.1-30.1L352 67.9 444.1 160z" />
    </Icon>
);

export default Ruler;