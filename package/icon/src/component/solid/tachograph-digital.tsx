
import { Icon } from "../../index";

/**
 * A component that renders the `tachograph-digital` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tachograph-digital?s=solid tachograph-digital}
 * @preview ![tachograph-digital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tachograph-digital.svg)
 */
const TachographDigital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm32 64l224 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM64 368c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16zm320 0c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zM80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default TachographDigital;