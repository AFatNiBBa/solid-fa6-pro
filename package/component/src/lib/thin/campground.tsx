
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=thin campground}
 * @preview ![campground](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/campground.svg)
 */
const Campground: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M397.2 1.9c3.4 2.9 3.8 7.9 .9 11.3L298.5 131 530.8 405.8c8.5 10.1 13.2 22.9 13.2 36.2l0 30.1c0 22.1-17.9 40-40 40l-216 0L72 512c-22.1 0-40-17.9-40-40l0-30.1c0-13.2 4.7-26 13.2-36.2L277.5 131 177.9 13.2c-2.9-3.4-2.4-8.4 .9-11.3s8.4-2.4 11.3 .9L288 118.6 385.9 2.8c2.9-3.4 7.9-3.8 11.3-.9zM57.5 416.1c-6.1 7.2-9.5 16.4-9.5 25.8L48 472c0 13.3 10.7 24 24 24l68.1 0L281.7 315.1c1.5-1.9 3.8-3.1 6.3-3.1s4.8 1.1 6.3 3.1L435.9 496l68.1 0c13.3 0 24-10.7 24-24l0-30.1c0-9.5-3.4-18.6-9.5-25.8L288 143.4 57.5 416.1zm103 79.9L288 496l127.6 0L288 333 160.4 496z" />
    </Icon>
);

export default Campground;