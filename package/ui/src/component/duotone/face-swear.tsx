
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-swear` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-swear?s=duotone face-swear}
 * @preview ![face-swear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-swear.svg)
 */
const FaceSwear: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256C64 114.6 178.6 0 320 0S576 114.6 576 256L64 256zM176.8 138.9c-2.8 8.4 1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1zm160 42.1c2.8 8.4 11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2z" />
        <path d="M0 336c0-26.5 21.5-48 48-48l544 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 336zm416 32c0-8.8-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-32 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 32 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-32 16 0c8.8 0 16-7.2 16-16zm-64 16l0 32-32 0 0-32 32 0zm220.1-29.6c5.8-6.7 5-16.8-1.7-22.6s-16.8-5-22.6 1.7l-96 112c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7l96-112zM472 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 336c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM208 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM112 320c-8.8 0-16 7.2-16 16l0 1.5c-5.6 1.2-11.6 3.3-16.9 7c-7.5 5.3-12.7 13.3-14.5 23.5c-1.3 7.2-.6 14.4 2.5 20.9c3 6.4 7.8 10.9 12.4 14.1c6.8 4.7 15 6.9 23.1 9.2c8.4 2.3 16.7 4.7 23.6 9.7c2.6 1.9 2.6 6.7-.4 8.5c0 0 0 0 0 0c-1.1 .7-3.8 1.6-8.8 1.5c-10.1-.2-22.5-3.9-32-7.1c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2c4.9 1.6 12.1 4 20.2 5.9l0 3c0 8.8 7.2 16 16 16s16-7.2 16-16l0-.8c5.1-.8 10.4-2.4 15.3-5.4c9.1-5.5 15-14.4 17-25.9c1.3-7.3 .7-14.5-2.2-21.1c-2.8-6.6-7.4-11.3-12.1-14.7c-7.4-5.4-16-7.8-24.6-10.2c-8-2.3-16-4.5-22.9-9.2c-2.1-1.4-2.2-4.3 .1-5.9c1.1-.8 3.3-1.7 7.4-2.2c8.3-.9 18.9 .8 26.8 2.9c8.5 2.3 17.3-2.8 19.6-11.3s-2.8-17.3-11.3-19.6c-3.4-.9-7.5-1.9-12.1-2.6l0-1.8c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default FaceSwear;