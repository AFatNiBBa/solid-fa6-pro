
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=thin rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM298.3 170.3c-3.1 3.1-3.1 8.2 0 11.3L372.7 256l-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3l-80-80c-3.1-3.1-8.2-3.1-11.3 0zm-84.7 11.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-80 80c-3.1 3.1-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L139.3 256l74.3-74.3z" />
    </Icon>
);

export default RectangleCode;