
import { Icon } from "../../index";

/**
 * A component that renders the `tachograph-digital` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tachograph-digital?s=thin tachograph-digital}
 * @preview ![tachograph-digital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tachograph-digital.svg)
 */
const TachographDigital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l512 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L64 80zM0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm96 16c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L96 144zM64 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 256c-17.7 0-32-14.3-32-32l0-64zm0 216c0-4.4 3.6-8 8-8l272 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L72 384c-4.4 0-8-3.6-8-8zm320 0c0-4.4 3.6-8 8-8l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8zM80 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default TachographDigital;