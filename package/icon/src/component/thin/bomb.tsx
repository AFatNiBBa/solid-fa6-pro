
import { Icon } from "../../index";

/**
 * A component that renders the `bomb` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=thin bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path d="M456 16l0 40 40 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-40 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40-40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l40 0 0-40c0-4.4 3.6-8 8-8s8 3.6 8 8zM289.8 119.6c-4.4 4.4-10.9 5.8-16.7 3.7C252.8 116 230.9 112 208 112C102 112 16 198 16 304s86 192 192 192s192-86 192-192c0-22.9-4-44.8-11.3-65.1c-2.1-5.8-.6-12.4 3.7-16.7l2.9-2.9c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0l-2.9 2.9zM406.6 230.6l-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9c12.5-12.5 32.8-12.5 45.3 0L361 139.7l33.4-33.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L372.3 151l34.3 34.3c12.5 12.5 12.5 32.8 0 45.3zM200 184c-61.9 0-112 50.1-112 112l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-70.7 57.3-128 128-128l8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-8 0z" />
    </Icon>
);

export default Bomb;