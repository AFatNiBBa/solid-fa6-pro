
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=light computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32c17.7 0 32 14.3 32 32l0 304c0 17.7-14.3 32-32 32L64 400c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l320 0zM64 0C28.7 0 0 28.7 0 64L0 368c0 23.7 12.9 44.4 32 55.4L32 480c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-56.6c19.1-11.1 32-31.7 32-55.4l0-304c0-35.3-28.7-64-64-64L64 0zm0 432l320 0 0 48L64 480l0-48zM352 96l0 128L96 224 96 96l256 0zM96 64C78.3 64 64 78.3 64 96l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 64zM224 336c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16zM96 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ComputerClassic;