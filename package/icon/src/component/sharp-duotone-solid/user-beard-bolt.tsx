
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-beard-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-beard-bolt?s=sharp-duotone-solid user-beard-bolt}
 * @preview ![user-beard-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-beard-bolt.svg)
 */
const UserBeardBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 512l366.5 0 30-96L320 416l0-34.7-2.7 2.7L304 384l-18.7 0-22.6 22.6-9.4 9.4L240 416l-32 0-13.3 0-9.4-9.4L162.7 384 144 384l-13.3 0-9.4-9.4-48-48L66.7 320 64 320 0 512zM64 200l0 40 32 32 0 32 48 48 32 0 32 32 32 0 32-32 32 0 48-48 0-32 32-32 0-40-32-88 0-8C352 46.6 305.4 0 248 0L224 0 200 0C142.6 0 96 46.6 96 104l0 8L64 200zm80-72c0-11.4 2.4-22.2 6.7-32L192 96l32-32 32 32 41.3 0c4.3 9.8 6.7 20.6 6.7 32l0 16c0 12.7-3 24.8-8.3 35.5l-25.6-25.6-5.9-5.9-8.3 0-64 0-8.3 0-5.9 5.9-25.6 25.6C147 168.8 144 156.7 144 144l0-16zm34.5 81.8L200.3 188l47.4 0 21.8 21.8c-1.8 1.2-3.6 2.4-5.5 3.5c-11.8 6.8-25.4 10.7-40 10.7s-28.2-3.9-40-10.7c-1.9-1.1-3.8-2.3-5.5-3.5z" />
        <path d="M576 376L400 512l40-128H352V360L528 224 488 352h88v24z" />
    </Icon>
);

export default UserBeardBolt;