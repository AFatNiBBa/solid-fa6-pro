
import { Icon } from "../../index";

/**
 * A component that renders the `turntable` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turntable?s=light turntable}
 * @preview ![turntable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/turntable.svg)
 */
const Turntable: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zM64 256a160 160 0 1 0 320 0A160 160 0 1 0 64 256zm160 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm256 17.4L480 112c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176.5c-16 1.4-30.9 10.8-38.6 26.2l-16 32c-11.8 23.6-2.2 52.2 21.3 64s52.2 2.2 64-21.3l16-32c10.6-21.2 3.9-46.5-14.6-59.9zM452.3 320c2.3 0 4.6 .6 6.8 1.7c7.9 4 11.1 13.6 7.2 21.5l-16 32c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l16-32c2.7-5.5 8.2-8.7 14-8.8l.7 0z" />
    </Icon>
);

export default Turntable;