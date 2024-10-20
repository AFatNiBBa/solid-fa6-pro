
import { Icon } from "../../index";

/**
 * A component that renders the `user-headset` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=sharp-thin user-headset}
 * @preview ![user-headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-headset.svg)
 */
const UserHeadset: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 192c0-88.4 71.6-160 160-160s160 71.6 160 160l0 112-112 0 0-32 0-16-16 0-64 0-16 0 0 16 0 32 0 16 16 0 32 0 32 0 16 0 120 0 8 0 0-8 0-120c0-97.2-78.8-176-176-176S48 94.8 48 192l0 16 0 8 16 0 0-8 0-16zM256 304l-32 0-32 0 0-32 64 0 0 32zM59.9 368l328.2 0 38.4 128-405 0L59.9 368zM400 352L48 352 4.8 496 0 512l16.7 0 414.6 0 16.7 0-4.8-16L400 352zm-96-81.6l0 21.5c29.3-23.5 48-59.5 48-99.9c0-70.7-57.3-128-128-128S96 121.3 96 192c0 40.4 18.7 76.5 48 99.9l0-21.5c-19.8-20.2-32-47.9-32-78.4c0-61.9 50.1-112 112-112s112 50.1 112 112c0 30.5-12.2 58.2-32 78.4z" />
    </Icon>
);

export default UserHeadset;