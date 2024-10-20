
import { Icon } from "../../index";

/**
 * A component that renders the `retweet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=light retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 103.9L146.5 160 45.5 160 96 103.9zm88 60.5c0-6.8-2.5-13.4-7.1-18.4l-69-76.7c-3-3.4-7.4-5.3-11.9-5.3s-8.9 1.9-11.9 5.3L15.1 146C10.5 151.1 8 157.6 8 164.4C8 179.7 20.3 192 35.6 192L80 192l0 144c0 44.2 35.8 80 80 80l144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0c-26.5 0-48-21.5-48-48l0-144 44.4 0c15.2 0 27.6-12.3 27.6-27.6zM480 408.1L429.5 352l100.9 0L480 408.1zm-88-60.5c0 6.8 2.5 13.4 7.1 18.4l69 76.7c3 3.4 7.4 5.3 11.9 5.3s8.9-1.9 11.9-5.3l69-76.7c4.6-5.1 7.1-11.6 7.1-18.4c0-15.2-12.3-27.6-27.6-27.6L496 320l0-144c0-44.2-35.8-80-80-80L272 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l144 0c26.5 0 48 21.5 48 48l0 144-44.4 0c-15.2 0-27.6 12.3-27.6 27.6z" />
    </Icon>
);

export default Retweet;