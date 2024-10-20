
import { Icon } from "../../index";

/**
 * A component that renders the `farm` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/farm?s=solid farm}
 * @preview ![farm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/farm.svg)
 */
const Farm: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0s96 43 96 96L0 96zm181.4 32L132.8 246c-3.2 7.7-4.8 16-4.8 24.4L128 480c0 11.7 3.1 22.6 8.6 32L48 512c-26.5 0-48-21.5-48-48L0 128l181.4 0zM160 480l0-209.7c0-4.2 .8-8.3 2.4-12.2l48.9-118.7c3-7.4 8.7-13.3 15.9-16.7L354.3 62.5c8.7-4.1 18.7-4.1 27.4 0l127.1 60.2c7.2 3.4 12.9 9.4 15.9 16.7l48.9 118.7c1.6 3.9 2.4 8 2.4 12.2L576 480c0 17.7-14.3 32-32 32l-112 0 0-64c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48l0 64-112 0c-17.7 0-32-14.3-32-32zM320 248l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Farm;