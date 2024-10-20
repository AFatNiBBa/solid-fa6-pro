
import { Icon } from "../../index";

/**
 * A component that renders the `cassette-tape` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-tape?s=light cassette-tape}
 * @preview ![cassette-tape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cassette-tape.svg)
 */
const CassetteTape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l-33.9 0-23.4-64.4c-6.9-19-24.9-31.6-45.1-31.6l-243.2 0c-20.2 0-38.2 12.6-45.1 31.6L97.9 448 64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM444.1 448l-312.1 0 19.4-53.5c2.3-6.3 8.3-10.5 15-10.5l243.2 0c6.7 0 12.7 4.2 15 10.5L444.1 448zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm96 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm55.4 64c5.4-9.4 8.6-20.3 8.6-32s-3.1-22.6-8.6-32l145.1 0c-5.4 9.4-8.6 20.3-8.6 32s3.1 22.6 8.6 32l-145.1 0zM160 288l256 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-256 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zm256-96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CassetteTape;