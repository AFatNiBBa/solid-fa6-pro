
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-tape` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-tape?s=sharp-duotone-solid cassette-tape}
 * @preview ![cassette-tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cassette-tape.svg)
 */
const CassetteTape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l576 0 0 448-92.9 0L439 362.4 435.1 352 424 352l-272 0-11.1 0L137 362.4 92.9 480 0 480 0 32zM80 208c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-256 0c-44.2 0-80 35.8-80 80zm47.1 272l36-96 249.8 0 36 96-321.8 0z" />
        <path d="M240 208c0 11.4-2.4 22.2-6.7 32l109.3 0c-4.3-9.8-6.7-20.6-6.7-32s2.4-22.2 6.7-32l-109.3 0c4.3 9.8 6.7 20.6 6.7 32zm176 80l-256 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l256 0c44.2 0 80 35.8 80 80s-35.8 80-80 80zM160 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm272-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default CassetteTape;