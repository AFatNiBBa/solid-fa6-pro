
import { Icon } from "../../index";

/**
 * A component that renders the `bolt` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=thin bolt}
 * @preview ![bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bolt.svg)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M309.9 6.3C314.4 2.2 320.3 0 326.4 0c17.8 0 29.9 18.3 22.9 34.7L268.1 224l123.3 0c13.6 0 24.6 11 24.6 24.6c0 7-3 13.7-8.3 18.4L138.1 505.7c-4.6 4-10.4 6.3-16.5 6.3c-17.9 0-29.9-18.3-22.9-34.7L179.9 288 55.3 288C42.5 288 32 277.5 32 264.7c0-6.7 2.8-13 7.8-17.4L309.9 6.3zM326.4 16c-2.2 0-4.3 .8-5.9 2.2L50.5 259.2c-1.6 1.4-2.5 3.4-2.5 5.5c0 4.1 3.3 7.3 7.3 7.3L192 272c2.7 0 5.2 1.4 6.7 3.6s1.7 5.1 .7 7.6L113.4 483.6c-2.5 5.9 1.8 12.4 8.2 12.4c2.2 0 4.3-.8 5.9-2.2L397.1 255c1.8-1.6 2.9-4 2.9-6.4c0-4.7-3.8-8.6-8.6-8.6L256 240c-2.7 0-5.2-1.4-6.7-3.6s-1.7-5.1-.7-7.6L334.6 28.4c2.5-5.8-1.8-12.4-8.1-12.4z" />
    </Icon>
);

export default Bolt;