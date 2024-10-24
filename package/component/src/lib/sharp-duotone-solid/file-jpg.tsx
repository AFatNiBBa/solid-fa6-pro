
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-jpg` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-jpg?s=sharp-duotone-solid file-jpg}
 * @preview ![file-jpg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-jpg.svg)
 */
const FileJpg: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 144-272 0 0 208L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zM208 512c26.5 0 48-21.5 48-48l0-96 0-16-32 0 0 16 0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16 0-16-32 0 0 16 0 16c0 26.5 21.5 48 48 48zM456 352c-22.1 0-40 17.9-40 40l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24 0-16-16 0-16 0-16 0 0 32 16 0 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 32 0 0-16c0-22.1-17.9-40-40-40l-16 0zm-168 0l0 16 0 80 0 48 0 16 32 0 0-16 0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0-16 0zm32 80l0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0z" />
    </Icon>
);

export default FileJpg;