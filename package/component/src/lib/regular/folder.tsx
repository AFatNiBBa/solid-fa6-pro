
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=regular folder}
 * @preview ![folder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/folder.svg)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z" />
    </Icon>
);

export default Folder;