
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folders` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=duotone folders}
 * @preview ![folders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folders.svg)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224c0-13.3-10.7-24-24-24S0 106.7 0 120z" />
        <path d="M160 384H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H394.5c-17 0-33.3-6.7-45.3-18.7L322.7 50.7c-12-12-28.3-18.7-45.3-18.7H160c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Folders;