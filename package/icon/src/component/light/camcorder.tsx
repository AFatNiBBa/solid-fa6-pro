
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=light camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 112c0-26.5 21.5-48 48-48l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L144 32c-44.2 0-80 35.8-80 80l0 48c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-17 0-158 0-17c0-35.3-28.7-64-64-64L96 160l0-48zM80 192l240 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32l16 0zM520.3 460.5c5.1 2.3 10.6 3.5 16.2 3.5c21.8 0 39.5-17.7 39.5-39.5l0-209c0-21.8-17.7-39.5-39.5-39.5c-5.6 0-11.1 1.2-16.2 3.5L416 226.4l0 35.1 117.4-52.8c1-.4 2-.7 3.1-.7c4.2 0 7.5 3.4 7.5 7.5l0 209c0 4.2-3.4 7.5-7.5 7.5c-1.1 0-2.1-.2-3.1-.7L416 378.5l0 35.1 104.3 46.9zM64 240c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 224c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Camcorder;