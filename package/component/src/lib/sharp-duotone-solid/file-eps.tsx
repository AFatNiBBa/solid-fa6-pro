
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-eps` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-eps?s=sharp-duotone-solid file-eps}
 * @preview ![file-eps](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-eps.svg)
 */
const FileEps: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM160 352l0 16 0 64 0 64 0 16 16 0 64 0 16 0 0-32-16 0-48 0 0-32 32 0 16 0 0-32-16 0-32 0 0-32 48 0 16 0 0-32-16 0-64 0-16 0zm144 0l-16 0 0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm117.7-80c-25.2 0-45.7 20.4-45.7 45.7c0 17.3 9.8 33.1 25.2 40.8l31.2 15.6c4.6 2.3 7.6 7 7.6 12.2c0 7.5-6.1 13.7-13.7 13.7L424 480l-16 0 0 32 16 0 34.3 0c25.2 0 45.7-20.4 45.7-45.7c0-17.3-9.8-33.1-25.2-40.8l-31.2-15.6c-4.6-2.3-7.6-7-7.6-12.2c0-7.5 6.1-13.7 13.7-13.7l26.3 0 16 0 0-32-16 0-26.3 0z" />
    </Icon>
);

export default FileEps;