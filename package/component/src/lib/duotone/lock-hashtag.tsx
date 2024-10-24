
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-hashtag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-hashtag?s=duotone lock-hashtag}
 * @preview ![lock-hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lock-hashtag.svg)
 */
const LockHashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-16 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64zm112 48c0-8.8 7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 64 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 64 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-64 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64-32 0c-8.8 0-16-7.2-16-16zm32-160c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48-160 0 0-48zm48 176l0 64 64 0 0-64-64 0z" />
        <path d="M192 256c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 64-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 64 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-64 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-64 0 0-32zm64 128l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default LockHashtag;