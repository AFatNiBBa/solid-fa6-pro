
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=thin headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240l0 144.1c0 30.9-25.1 56-56 56L319.3 456c-3.8-22.7-23.6-40-47.3-40l-32 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l32 0c23.8 0 43.5-17.3 47.3-40l120.6 .1c39.8 0 72-32.2 72-72L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56zm144-32l0 128c0 8.8-7.2 16-16 16c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64c8.8 0 16 7.2 16 16zM64 272l0 32c0 44.2 35.8 80 80 80c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32c-44.2 0-80 35.8-80 80zm288-48c0-8.8 7.2-16 16-16c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64c-8.8 0-16-7.2-16-16l0-128zm96 48c0-44.2-35.8-80-80-80c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32c44.2 0 80-35.8 80-80l0-32zM304 464c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default Headset;