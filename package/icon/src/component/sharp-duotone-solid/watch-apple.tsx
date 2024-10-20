
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-apple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-apple?s=sharp-duotone-solid watch-apple}
 * @preview ![watch-apple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/watch-apple.svg)
 */
const WatchApple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 256 0 64 0 0 384-64 0L64 448 0 448 0 64zM64 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm42.7-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm42.7-96a42.7 42.7 0 1 0 85.3 0 42.7 42.7 0 1 0 -85.3 0zm64-96c0 17.7 14.3 32 32 32c8.8 0 16.8-3.6 22.6-9.4c2.9-2.9 5.2-6.3 6.9-10.2c.8-1.9 1.4-3.9 1.9-6c.2-1 .4-2.1 .5-3.2c.1-.6 .1-1.1 .1-1.6c0-.5 0-1 0-1.5c0-.8 0-1.3 0-1.8s-.1-1.1-.1-1.6c-.1-1.1-.3-2.1-.5-3.2c-.4-2.1-1.1-4.1-1.9-6c-1.6-3.8-4-7.3-6.9-10.2c-5.8-5.8-13.8-9.4-22.6-9.4c-17.7 0-32 14.3-32 32zm0 192c0 17.7 14.3 32 32 32c8.8 0 16.8-3.6 22.6-9.4c2.9-2.9 5.2-6.3 6.9-10.2c.8-1.9 1.4-3.9 1.9-6c.2-1 .4-2.1 .5-3.2c.1-.6 .1-1.1 .1-1.6c0-.5 0-1 0-1.5c0-.8 0-1.3 0-1.8s-.1-1.1-.1-1.6c-.1-1.1-.3-2.1-.5-3.2c-.4-2.1-1.1-4.1-1.9-6c-1.6-3.8-4-7.3-6.9-10.2c-5.8-5.8-13.8-9.4-22.6-9.4c-17.7 0-32 14.3-32 32zM256 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M64 0L320 0l0 64L64 64 64 0zM213.3 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM320 512L64 512l0-64 256 0 0 64z" />
    </Icon>
);

export default WatchApple;