
import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=sharp-thin share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 480s-13.1-4.9-30.8-15.7C59.3 441.2 0 391.1 0 304c0-97.2 78.8-176 176-176l64 0 16 0 0-16 0-64 0-16 16 0 16 0L468.2 197.1 480 208l-11.8 10.9L288 384l-16 0-16 0 0-16 0-64 0-16-16 0-32 0c-61.9 0-112 50.1-112 112c0 21.2 6.2 39.2 13.2 52.8C118 470 128 480 128 480zM74.5 428c3.7 3.2 7.4 6.2 11 9c-3.3-11-5.6-23.4-5.6-37c0-70.7 57.3-128 128-128l48 0 16 0 0 16 0 80 9.8 0L456.3 208 281.8 48 272 48l0 80 0 16-16 0-80 0C87.6 144 16 215.6 16 304c0 58 28.8 97.9 58.5 124zM378.6 59.9l-5.9-5.4 10.8-11.8 5.9 5.4 168 154 6.4 5.9-6.4 5.9-168 154-5.9 5.4-10.8-11.8 5.9-5.4L540.2 208 378.6 59.9z" />
    </Icon>
);

export default ShareAll;