
import { Icon } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=sharp-light lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 128l0 64 192 0 0-64c0-53-43-96-96-96s-96 43-96 96zM96 192l0-64C96 57.3 153.3 0 224 0s128 57.3 128 128l0 64 64 0 32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32L0 224l0-32 32 0 64 0zM32 480l384 0 0-256L32 224l0 256zM192 240l0 16 0 32 64 0 0-32 0-16 32 0 0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 64 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-64 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-64-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0zm0 144l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default LockHashtag;