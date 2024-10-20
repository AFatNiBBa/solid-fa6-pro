
import { Icon } from "../../index";

/**
 * A component that renders the `page` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page?s=thin page}
 * @preview ![page](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/page.svg)
 */
const Page: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 496l256 0c26.5 0 48-21.5 48-48l0-309.5c0-12.7-5.1-24.9-14.1-33.9L279.4 30.1c-9-9-21.2-14.1-33.9-14.1L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48zm256 16L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L245.5 0c17 0 33.3 6.7 45.3 18.7l74.5 74.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default Page;