
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=sharp-light campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 422.2L64 480l65.9 0 1.5-1.9 144-184L288 278l12.6 16.1 144 184 1.5 1.9 65.9 0 0-57.8L288 155.3 64 422.2zM170.6 480L288 480l117.4 0L288 330 170.6 480zM35.7 406.1L267.1 130.4 179.7 26.3 204.3 5.7 288 105.5 371.7 5.7l24.5 20.6L308.9 130.4 540.3 406.1l3.7 4.5 0 5.8 0 79.6 0 16-16 0-240 0L48 512l-16 0 0-16 0-79.6 0-5.8 3.7-4.5z" />
    </Icon>
);

export default Campground;