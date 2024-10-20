
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=light hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M207.6 51.6c2-8.6-3.4-17.2-12-19.2s-17.2 3.4-19.2 12l-23 99.6L48 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l98 0L109.1 336 16 336c-8.8 0-16 7.2-16 16s7.2 16 16 16l85.7 0L80.4 460.4c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l23-99.6 127.2 0-21.3 92.4c-2 8.6 3.4 17.2 12 19.2s17.2-3.4 19.2-12l23-99.6L400 368c8.8 0 16-7.2 16-16s-7.2-16-16-16l-98 0 36.9-160 93.1 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-85.7 0 21.3-92.4c2-8.6-3.4-17.2-12-19.2s-17.2 3.4-19.2 12l-23 99.6-127.2 0 21.3-92.4zM178.9 176L306 176 269.1 336 142 336l36.9-160z" />
    </Icon>
);

export default Hashtag;