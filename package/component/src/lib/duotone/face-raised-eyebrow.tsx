
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=duotone face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112-96c0-8.8 7.2-16 16-16c21.3 0 42.7 0 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16c-21.3 0-42.7 0-64 0c-8.8 0-16-7.2-16-16zm32 192c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm64.4-112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm68.3-91.3c9.8-9.8 19.7-19.7 29.5-29.5c11-11 25.3-16.4 39.5-16.4c17.9 0 35.7 8.5 46.6 24.9c1.6 2.5 3.3 4.9 4.9 7.4c1.8 2.7 2.7 5.8 2.7 8.9c0 5.2-2.5 10.2-7.1 13.3c-7.4 4.9-17.3 2.9-22.2-4.4c-1.6-2.5-3.3-4.9-4.9-7.4c-8.4-12.6-26.2-14.4-36.9-3.7c-9.8 9.8-19.7 19.7-29.5 29.5c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM368.4 240a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M328.8 141.8c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5zM128 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zm80.4 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;