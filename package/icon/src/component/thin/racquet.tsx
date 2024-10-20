
import { Icon } from "../../index";

/**
 * A component that renders the `racquet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=thin racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349 16c39.2 0 77 13.5 105.3 41.8S496 123.8 496 163c0 49.6-21.5 101.9-62.3 142.7c-72.2 72.2-183.4 85.1-248 20.5C157.5 297.9 144 260.2 144 221c0-49.6 21.5-101.9 62.3-142.7S299.3 16 349 16zm0-16c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 40.3 13.1 79.8 40.9 110.8l-32 32-10.3-10.3c-12.5-12.5-32.8-12.5-45.3 0l-72 72c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l72-72c12.5-12.5 12.5-32.8 0-45.3L148.3 375l32-32c73.3 66.3 190.4 48.3 264.8-26c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0zM92.7 364.7c6.2-6.2 16.4-6.2 22.6 0l32 32c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-32-32c-6.2-6.2-6.2-16.4 0-22.6l72-72z" />
    </Icon>
);

export default Racquet;