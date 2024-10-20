
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=sharp-solid reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 144a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM512 64l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16zM224 160l96.7 0c8.1 89.7 83.5 160 175.3 160c5.1 0 10.2-.2 15.2-.6c.5 5.5 .8 11 .8 16.6c0 128-128 176-128 176s32-32 32-80c0-61.9-50.1-112-112-112l-80 0 0 96-32 0L0 240 192 64l32 0 0 96z" />
    </Icon>
);

export default ReplyClock;