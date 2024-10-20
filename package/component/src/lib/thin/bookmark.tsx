
import { Icon } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=thin bookmark}
 * @preview ![bookmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bookmark.svg)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L328 0c30.9 0 56 25.1 56 56l0 429.8c0 14.5-11.8 26.2-26.2 26.2c-5.4 0-10.6-1.7-15.1-4.7L192 401.8 41.3 507.3c-4.4 3.1-9.7 4.7-15.1 4.7C11.8 512 0 500.2 0 485.8L0 56zM56 16C33.9 16 16 33.9 16 56l0 429.8c0 5.7 4.6 10.2 10.2 10.2c2.1 0 4.2-.6 5.9-1.9L187.4 385.4c2.8-1.9 6.4-1.9 9.2 0L351.9 494.1c1.7 1.2 3.8 1.9 5.9 1.9c5.7 0 10.2-4.6 10.2-10.2L368 56c0-22.1-17.9-40-40-40L56 16z" />
    </Icon>
);

export default Bookmark;