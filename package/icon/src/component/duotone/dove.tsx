
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dove` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dove?s=duotone dove}
 * @preview ![dove](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dove.svg)
 */
const Dove: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.9 426.8c-1.7 5-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448l74.4 0c88.4 0 160-71.6 160-160l0-160 29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3L400 64c-44.2 0-80 35.8-80 80l0 30.6 0 33.4c-43.1-3.6-118.1-24.1-170.3-76.2c-21.4-21.3-39-48-48.9-81C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8zM416 144a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M209.2 9.3c-16.7 19.3-42.9 60.1-59.4 121.8c-.1 .2-.1 .5-.2 .7C201.9 183.9 276.9 204.4 320 208l0-33.4C282.2 139.4 250.6 90.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8z" />
    </Icon>
);

export default Dove;