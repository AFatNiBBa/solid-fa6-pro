
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brain` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brain?s=sharp-duotone-solid brain}
 * @preview ![brain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brain.svg)
 */
const Brain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304c0 34.2 21.4 63.4 51.6 74.8C49.3 385.4 48 392.6 48 400c0 35.3 28.7 64 64 64c5.6 0 11.1-.7 16.3-2.1c2.9 28.2 26.8 50.1 55.7 50.1l56 0 0-56 0-400 0-56L184 0c-28.9 0-52.7 21.9-55.7 49.9C100.6 56.9 80 82.1 80 112c0 6 .8 11.9 2.4 17.4C53.6 135.7 32 161.3 32 192c0 15 5.1 28.8 13.8 39.7C18.7 244.5 0 272.1 0 304zM272 0l0 56 0 400 0 56 56 0c28.9 0 52.7-21.9 55.7-50.1c5.2 1.4 10.7 2.1 16.3 2.1c35.3 0 64-28.7 64-64c0-7.4-1.3-14.6-3.6-21.2C490.6 367.4 512 338.2 512 304c0-31.9-18.7-59.5-45.8-72.3C474.9 220.8 480 207 480 192c0-30.7-21.6-56.3-50.4-62.6c1.6-5.5 2.4-11.4 2.4-17.4c0-29.9-20.6-55.1-48.3-62.1C380.6 21.9 356.9 0 328 0L272 0z" />
        <path d="M240 456l0-400 32 0 0 400-32 0z" />
    </Icon>
);

export default Brain;