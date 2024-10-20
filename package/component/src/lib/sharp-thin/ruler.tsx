
import { Icon } from "../../index";

/**
 * A component that renders the `ruler` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler?s=sharp-thin ruler}
 * @preview ![ruler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ruler.svg)
 */
const Ruler: typeof Icon = x => (
    <Icon {...x}>
        <path d="M500.7 148.7L512 160l-11.3 11.3L171.3 500.7 160 512l-11.3-11.3L11.3 363.3 0 352l11.3-11.3L340.7 11.3 352 0l11.3 11.3L500.7 148.7zM489.4 160L352 22.6l-63 63 52.7 52.7 5.7 5.7L336 155.3l-5.7-5.7L277.7 97 225 149.7l52.7 52.7 5.7 5.7L272 219.3l-5.7-5.7L213.7 161 161 213.7l52.7 52.7 5.7 5.7L208 283.3l-5.7-5.7L149.7 225 97 277.7l52.7 52.7 5.7 5.7L144 347.3l-5.7-5.7L85.7 289l-63 63L160 489.4 489.4 160z" />
    </Icon>
);

export default Ruler;