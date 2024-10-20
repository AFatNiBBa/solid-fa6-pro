
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=thin lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 16c61.9 0 112 50.1 112 112l0 64-224 0 0-64c0-61.9 50.1-112 112-112zM96 128l0 64-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM64 208l32 0 16 0 224 0 16 0 32 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48zm88.9 180.3c-.1 .1-.1 .2-.1 .3l-23.9 47.8c-2 4-.4 8.8 3.6 10.7s8.8 .4 10.7-3.6L164.9 400l118.1 0 21.8 43.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-23.9-47.8c0-.1-.1-.2-.1-.3L231.2 260.5c-.3-.6-.6-1.1-1-1.6c-.2-.2-.4-.4-.6-.6c-1.5-1.4-3.5-2.2-5.5-2.2c-1.1 0-2.1 .2-3.2 .7c-.7 .3-1.3 .7-1.9 1.2c-.2 .2-.5 .4-.7 .6c-.6 .6-1.1 1.3-1.4 2L152.9 388.3zm20-4.3L224 281.9 275.1 384l-102.1 0z" />
    </Icon>
);

export default LockA;