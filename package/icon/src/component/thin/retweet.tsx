
import { Icon } from "../../index";

/**
 * A component that renders the `retweet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=thin retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 164.7c0 6.2-5.1 11.3-11.3 11.3L104 176l-16 0-60.7 0c-6.2 0-11.3-5.1-11.3-11.3c0-3 1.2-5.9 3.3-8L96 80l76.7 76.7c2.1 2.1 3.3 5 3.3 8zM27.3 192L88 192l0 152c0 39.8 32.2 72 72 72l152 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-152 0c-30.9 0-56-25.1-56-56l0-152 60.7 0c15.1 0 27.3-12.2 27.3-27.3c0-7.2-2.9-14.2-8-19.3L107.3 68.7c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7L8 145.4c-5.1 5.1-8 12.1-8 19.3C0 179.8 12.2 192 27.3 192zM400 347.3c0-6.2 5.1-11.3 11.3-11.3l60.7 0 16 0 60.7 0c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8L480 432l-76.7-76.7c-2.1-2.1-3.3-5-3.3-8zM548.7 320L488 320l0-152c0-39.8-32.2-72-72-72L264 96c-4.4 0-8 3.6-8 8s3.6 8 8 8l152 0c30.9 0 56 25.1 56 56l0 152-60.7 0c-15.1 0-27.3 12.2-27.3 27.3c0 7.2 2.9 14.2 8 19.3l76.7 76.7c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7L568 366.6c5.1-5.1 8-12.1 8-19.3c0-15.1-12.2-27.3-27.3-27.3z" />
    </Icon>
);

export default Retweet;