
import { Icon } from "../../index";

/**
 * A component that renders the `file-magnifying-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-magnifying-glass?s=sharp-thin file-magnifying-glass}
 * @preview ![file-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-magnifying-glass.svg)
 */
const FileMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zM176 400c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80c0 19.2-6.8 36.9-18.1 50.7l-.2-.2-11.3 11.3 .2 .2c-13.8 11.2-31.4 18-50.5 18zm0 16c23.6 0 45.2-8.5 61.9-22.6l44.4 44.4 5.7 5.7 11.3-11.3-5.7-5.7-44.4-44.4C263.4 365.3 272 343.7 272 320c0-53-43-96-96-96s-96 43-96 96s43 96 96 96z" />
    </Icon>
);

export default FileMagnifyingGlass;