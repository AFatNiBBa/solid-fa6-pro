
import { Icon } from "../../index";

/**
 * A component that renders the `tachograph-digital` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tachograph-digital?s=sharp-thin tachograph-digital}
 * @preview ![tachograph-digital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tachograph-digital.svg)
 */
const TachographDigital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 80l0 352 608 0 0-352L16 80zM0 64l16 0 608 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zm80 80l0 96 256 0 0-96L80 144zM64 128l16 0 256 0 16 0 0 16 0 96 0 16-16 0L80 256l-16 0 0-16 0-96 0-16zm0 240l8 0 272 0 8 0 0 16-8 0L72 384l-8 0 0-16zm320 0l8 0 176 0 8 0 0 16-8 0-176 0-8 0 0-16zM96 288l0 32-32 0 0-32 32 0zm32 0l32 0 0 32-32 0 0-32zm96 0l0 32-32 0 0-32 32 0zm32 0l32 0 0 32-32 0 0-32zm96 32l-32 0 0-32 32 0 0 32z" />
    </Icon>
);

export default TachographDigital;