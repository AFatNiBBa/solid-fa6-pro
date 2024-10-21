
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=thin microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 24l0 16c0 4.4-3.6 8-8 8l-8 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-144 0-16 0-64c0-8.8-7.2-16-16-16l-8 0c-4.4 0-8-3.6-8-8l0-16c0-4.4-3.6-8-8-8l-48 0c-4.4 0-8 3.6-8 8zM288 144l0 144c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32l0-8c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 8c17.7 0 32 14.3 32 32l0 64c106 0 192 86 192 192c0 78.7-47.4 146.4-115.1 176L504 496c4.4 0 8 3.6 8 8s-3.6 8-8 8l-216 0-80 0L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l200 0 80 0c97.2 0 176-78.8 176-176s-78.8-176-176-176zM160 360c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8zM96 424c0-4.4 3.6-8 8-8l208 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-208 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Microscope;