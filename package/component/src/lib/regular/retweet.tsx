
import { Icon } from "../../index";

/**
 * A component that renders the `retweet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=regular retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M120 208l31 0c22.6 0 41-18.3 41-41c0-10.9-4.3-21.3-12-29L113 71c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-67 67c-7.7 7.7-12 18.1-12 29c0 22.6 18.3 41 41 41l31 0 0 120c0 48.6 39.4 88 88 88l136 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-136 0c-22.1 0-40-17.9-40-40l0-120zM96 121.9L134.1 160l-76.1 0L96 121.9zM504 304l0-120c0-48.6-39.4-88-88-88L280 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l136 0c22.1 0 40 17.9 40 40l0 120-31 0c-22.6 0-41 18.3-41 41c0 10.9 4.3 21.3 12 29l67 67c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l67-67c7.7-7.7 12-18.1 12-29c0-22.6-18.3-41-41-41l-31 0zm-24 86.1L441.9 352l76.1 0L480 390.1z" />
    </Icon>
);

export default Retweet;