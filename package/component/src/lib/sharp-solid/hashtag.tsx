
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=sharp-solid hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M308.9 32l64.9 0-16 96 74.2 0 12.9 0-10.7 64-2.2 0-84.9 0L325.8 320l74.2 0 12.9 0-10.7 64-2.2 0-84.9 0-16 96-64.9 0 16-96-95.1 0-16 96-64.9 0 16-96L16 384 3.1 384l10.7-64 2.2 0 84.9 0 21.3-128L48 192l-12.9 0 10.7-64 2.2 0 84.9 0 16-96 64.9 0-16 96 95.1 0 16-96zM165.8 320l95.1 0 21.3-128-95.1 0L165.8 320z" />
    </Icon>
);

export default Hashtag;