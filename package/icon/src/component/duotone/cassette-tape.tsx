
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-tape` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-tape?s=duotone cassette-tape}
 * @preview ![cassette-tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cassette-tape.svg)
 */
const CassetteTape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-28.9 0-36.3-96.9c-7-18.7-24.9-31.1-44.9-31.1l-227.6 0c-20 0-37.9 12.4-44.9 31.1L92.9 480 64 480c-35.3 0-64-28.7-64-64L0 96zM80 208c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-256 0c-44.2 0-80 35.8-80 80zm47.1 272l32.1-85.6c2.3-6.2 8.3-10.4 15-10.4l227.6 0c6.7 0 12.6 4.1 15 10.4L448.9 480l-321.8 0z" />
        <path d="M240 208c0 11.4-2.4 22.2-6.7 32l109.3 0c-4.3-9.8-6.7-20.6-6.7-32s2.4-22.2 6.7-32l-109.3 0c4.3 9.8 6.7 20.6 6.7 32zm176 80l-256 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l256 0c44.2 0 80 35.8 80 80s-35.8 80-80 80zM160 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm272-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default CassetteTape;