
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=light projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zM267.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64zm320 22.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64zM288 320a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm288 0c0-36-11.9-69.3-32-96l32 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0-16 0c20.1-26.7 32-60 32-96zm0 128c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L64 192c-35.3 0-64 28.7-64 64L0 384c0 35.3 28.7 64 64 64l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 224 0c26.7 20.1 60 32 96 32c37.3 0 71.6-12.7 98.8-34.1c-.9 .7-1.8 1.4-2.8 2.1l32 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM80 416l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l224 0c-20.1 26.7-32 60-32 96s11.9 69.3 32 96L80 416zm16-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Projector;