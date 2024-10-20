
import { Icon } from "../../index";

/**
 * A component that renders the `file-import` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=sharp-light file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 192l144 0 0 288-320 0 0-112-32 0 0 112 0 32 32 0 320 0 32 0 0-32 0-328L360 0 160 0 128 0l0 32 0 224 32 0 0-224 160 0 0 144 0 16 16 0zm138.7-32L352 160l0-122.7L474.7 160zM283.3 212.7L272 201.4 249.4 224l11.3 11.3L329.4 304 16 304 0 304l0 32 16 0 313.4 0-68.7 68.7L249.4 416 272 438.6l11.3-11.3 96-96L390.6 320l-11.3-11.3-96-96z" />
    </Icon>
);

export default FileImport;