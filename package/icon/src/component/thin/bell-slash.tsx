
import { Icon } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=thin bell-slash}
 * @preview ![bell-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bell-slash.svg)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M386.2 400l-258.5 0c-8.7 0-15.7-7-15.7-15.7c0-3.6 1.2-7 3.4-9.8l16.7-20.9c27.3-34.1 42.6-76.1 43.8-119.6L160 221.4l0 7.2c0 41.8-14.2 82.3-40.3 114.9l-16.7 20.9c-4.5 5.6-6.9 12.6-6.9 19.8c0 17.5 14.2 31.7 31.7 31.7l278.8 0-20.3-16zM312 32.2c-39.9 2-76 18.5-102.9 44.5l12.7 10C247.5 62.7 282 48 320 48c79.5 0 144 64.5 144 144l0 36.6c0 18.9 2.7 37.6 7.9 55.5L495.7 303c-10.3-23.3-15.7-48.5-15.7-74.3l0-36.6c0-85.7-67.4-155.6-152-159.8l0-.2 0-24c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 24 0 .2zM272 448c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 12.7-5.1 24.9-14.1 33.9s-21.2 14.1-33.9 14.1s-24.9-5.1-33.9-14.1s-14.1-21.2-14.1-33.9zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default BellSlash;