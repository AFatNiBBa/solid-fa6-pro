
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-png` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-png?s=sharp-duotone-solid file-png}
 * @preview ![file-png](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-png.svg)
 */
const FilePng: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM176 352l-16 0 0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm96-80l-16 0 0 16 0 128 0 16 32 0 0-16 0-58.9 27.7 65.1 4.1 9.7 10.6 0 5.6 0 16 0 0-16 0-128 0-16-32 0 0 16 0 62.6-29.3-68.9-4.1-9.7L308 352l-4 0zm112 40l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24 0-16-16 0-16 0-16 0 0 32 16 0 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 32 0 0-16c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default FilePng;