
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=thin arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M34.3 34.3c3.1-3.1 8.2-3.1 11.3 0L208 196.7 208 72c0-4.4 3.6-8 8-8s8 3.6 8 8l0 144c0 4.4-3.6 8-8 8L72 224c-4.4 0-8-3.6-8-8s3.6-8 8-8l124.7 0L34.3 45.7c-3.1-3.1-3.1-8.2 0-11.3zm443.3 0c3.1 3.1 3.1 8.2 0 11.3L315.3 208 440 208c4.4 0 8 3.6 8 8s-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8l0-144c0-4.4 3.6-8 8-8s8 3.6 8 8l0 124.7L466.3 34.3c3.1-3.1 8.2-3.1 11.3 0zM72 304c-4.4 0-8-3.6-8-8s3.6-8 8-8l144 0c4.4 0 8 3.6 8 8l0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-124.7L45.7 477.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L196.7 304 72 304zm216-8c0-4.4 3.6-8 8-8l144 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-124.7 0L477.7 466.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L304 315.3 304 440c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-144z" />
    </Icon>
);

export default ArrowsMinimize;