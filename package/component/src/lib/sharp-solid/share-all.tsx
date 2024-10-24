
import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=sharp-solid share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M469.6 184.4L352 76.6 352 32l32 0L576 208 384 384l-32 0 0-44.6L469.6 231.6 495.4 208l-25.7-23.6zM352 120l72.3 66.3L448 208l-23.7 21.7L352 296l-96 88-32 0 0-96-16 0c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176l48 0 0-96 32 0 96 88z" />
    </Icon>
);

export default ShareAll;