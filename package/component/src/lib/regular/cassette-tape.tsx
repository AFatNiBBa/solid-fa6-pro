
import { Icon } from "../../index";

/**
 * A component that renders the `cassette-tape` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-tape?s=regular cassette-tape}
 * @preview ![cassette-tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cassette-tape.svg)
 */
const CassetteTape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-40 0-25.6-61.5c-8.7-20.9-29.1-34.5-51.7-34.5l-213.3 0c-22.6 0-43 13.6-51.7 34.5L104 432l-40 0c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM420 432l-264 0 17.9-43.1c1.2-3 4.2-4.9 7.4-4.9l213.3 0c3.2 0 6.1 1.9 7.4 4.9L420 432zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM176 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 16c0-5.5-.7-10.9-2-16l100 0c-1.3 5.1-2 10.5-2 16s.7 10.9 2 16l-100 0c1.3-5.1 2-10.5 2-16zm224 0c0-35.3-28.7-64-64-64l-224 0c-35.3 0-64 28.7-64 64s28.7 64 64 64l224 0c35.3 0 64-28.7 64-64zm-80 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default CassetteTape;