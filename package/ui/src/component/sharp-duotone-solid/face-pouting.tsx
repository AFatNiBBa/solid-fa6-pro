
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-pouting` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pouting?s=sharp-duotone-solid face-pouting}
 * @preview ![face-pouting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-pouting.svg)
 */
const FacePouting: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm107.8-53.9c3.4-10.1 6.7-20.2 10.1-30.4c5.1 1.7 10.1 3.4 15.2 5.1c32 10.7 64 21.3 96 32c5.1 1.7 10.1 3.4 15.2 5.1c-3.4 10.1-6.7 20.2-10.1 30.4l-15.2-5.1-10.9-3.6c.2 1.5 .3 2.9 .3 4.4c0 17.7-14.3 32-32 32c-8.8 0-16.8-3.6-22.6-9.4c-2.9-2.9-5.2-6.3-6.9-10.2c-.8-1.9-1.4-3.9-1.9-6c-.2-1-.4-2.1-.5-3.2c-.1-.8-.1-1.6-.1-1.6l0-1.7c0-.5 0-1.1 0-1.6s.1-1.1 .1-1.6c.1-1.1 .3-2.1 .5-3.2c.4-2.1 1-4.1 1.9-6c1.6-3.8 3.9-7.3 6.8-10.2c-10.2-3.4-20.5-6.8-30.7-10.2c-5.1-1.7-10.1-3.4-15.2-5.1zM152 414.6c4.7-53 49.3-94.6 103.6-94.6s98.8 41.6 103.6 94.6C330.1 395.4 294.3 384 255.6 384s-74.5 11.4-103.6 30.6zM267.8 213.9c5.1-1.7 10.1-3.4 15.2-5.1c32-10.7 64-21.3 96-32c5.1-1.7 10.1-3.4 15.2-5.1c3.4 10.1 6.7 20.2 10.1 30.4c-5.1 1.7-10.1 3.4-15.2 5.1c-10.1 3.4-20.1 6.7-30.2 10.1c5.9 5.8 9.5 13.9 9.5 22.8c0 17.7-14.3 32-32 32c-8.8 0-16.8-3.6-22.6-9.4c-2.9-2.9-5.2-6.3-6.9-10.2c-.8-1.9-1.4-3.9-1.9-6c-.2-1-.4-2.1-.5-3.2c-.1-.8-.1-1.6-.1-1.6l0-1.7c0-.8 0-1.5 .1-2.3s.1-1.6 .3-2.3c-3.9 1.3-7.8 2.6-11.7 3.9c-5.1 1.7-10.1 3.4-15.2 5.1l-10.1-30.4z" />
        <path d="M133.1 176.8l-15.2-5.1-10.1 30.4 15.2 5.1 30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6 15.2 5.1 10.1-30.4-15.2-5.1-96-32zm256 30.4l15.2-5.1-10.1-30.4-15.2 5.1-96 32-15.2 5.1 10.1 30.4 15.2-5.1 11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1z" />
    </Icon>
);

export default FacePouting;