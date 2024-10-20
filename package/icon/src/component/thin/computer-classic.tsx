
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=thin computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 304c0 26.5-21.5 48-48 48L64 416c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l320 0zM64 0C28.7 0 0 28.7 0 64L0 368c0 23.7 12.9 44.4 32 55.4L32 480c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-56.6c19.1-11.1 32-31.7 32-55.4l0-304c0-35.3-28.7-64-64-64L64 0zM400 430l0 50c0 8.8-7.2 16-16 16L64 496c-8.8 0-16-7.2-16-16l0-50c5.1 1.3 10.5 2 16 2l320 0c5.5 0 10.9-.7 16-2zM352 80c8.8 0 16 7.2 16 16l0 144c0 8.8-7.2 16-16 16L96 256c-8.8 0-16-7.2-16-16L80 96c0-8.8 7.2-16 16-16l256 0zM96 64C78.3 64 64 78.3 64 96l0 144c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-144c0-17.7-14.3-32-32-32L96 64zM224 344c0 4.4 3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0c-4.4 0-8 3.6-8 8zM80 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ComputerClassic;