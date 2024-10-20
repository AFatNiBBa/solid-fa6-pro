
import { Icon } from "../../index";

/**
 * A component that renders the `memo-circle-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-check?s=light memo-circle-check}
 * @preview ![memo-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/memo-circle-check.svg)
 */
const MemoCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32L64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l232.2 0c9.8 11.8 21 22.3 33.5 31.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 134.6c-11.2 3.2-21.9 7.4-32 12.6L352 64c0-17.7-14.3-32-32-32zM64 144c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16zm16 80l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 256c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16s7.2-16 16-16zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm44.7 100.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7z" />
    </Icon>
);

export default MemoCircleCheck;