
import { Icon } from "../../index";

/**
 * A component that renders the `head-side` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=thin head-side}
 * @preview ![head-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/head-side.svg)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 222.9C16 108.6 108.6 16 222.9 16l16.8 0c71.6 0 137.5 43.3 166.4 105c3.5 7.4 6.9 15.1 10.4 22.9c6.4 14.3 12.9 28.9 20.1 42.7c11.3 21.6 24.8 42.2 43.5 58.9l3.8 3.4c7.7 6.9 12.1 16.7 12.1 27c0 20-16.2 36.2-36.2 36.2L440 312c-4.4 0-8 3.6-8 8l0 72c0 22.1-17.9 40-40 40l-80 0c-4.4 0-8 3.6-8 8l0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 72 0c30.9 0 56-25.1 56-56l0-64 11.8 0c28.8 0 52.2-23.4 52.2-52.2c0-14.9-6.4-29.1-17.5-39l-3.8-3.4c-16.7-14.9-29.2-33.6-40-54.4c-7-13.4-13.1-27.1-19.3-41c-3.5-7.9-7.1-15.9-10.8-23.9C389.1 46.9 317.6 0 239.7 0L222.9 0C99.8 0 0 99.8 0 222.9c0 52.8 16.9 101.5 47.4 139.9C57.5 375.5 64 390.2 64 405.3L64 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-98.7c0-19.8-8.5-37.8-20.1-52.4C31.8 317.5 16 272.3 16 222.9zM336 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default HeadSide;