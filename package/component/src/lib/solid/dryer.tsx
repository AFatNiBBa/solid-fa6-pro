
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=solid dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM368 304A144 144 0 1 0 80 304a144 144 0 1 0 288 0zM88 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM208 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM336 304c0 61.9-50.1 112-112 112c-56.4 0-103.1-41.7-110.9-96l62.9 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-62.9 0c7.8-54.3 54.4-96 110.9-96c61.9 0 112 50.1 112 112z" />
    </Icon>
);

export default Dryer;