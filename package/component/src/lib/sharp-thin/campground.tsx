
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=sharp-thin campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 427.3L48 496l92.1 0L281.7 315.1l6.3-8 6.3 8L435.9 496l92.1 0 0-68.7L288 143.4 48 427.3zM160.4 496L288 496l127.6 0L288 333 160.4 496zM33.9 419.2L277.5 131 177.9 13.2 190.1 2.8 288 118.6 385.9 2.8l12.2 10.3L298.5 131 542.1 419.2l1.9 2.2 0 2.9 0 79.6 0 8-8 0-248 0L40 512l-8 0 0-8 0-79.6 0-2.9 1.9-2.2z" />
    </Icon>
);

export default Campground;