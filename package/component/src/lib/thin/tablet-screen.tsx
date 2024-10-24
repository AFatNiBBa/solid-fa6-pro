
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=thin tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 320L16 384 16 64c0-26.5 21.5-48 48-48l320 0zm48 384l0 48c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-48 416 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM168 448c0 4.4 3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default TabletScreen;