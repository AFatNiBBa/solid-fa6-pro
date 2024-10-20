
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=thin files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 400l192 0c26.5 0 48-21.5 48-48l0-228.1c0-4.1-.8-8.1-2.3-11.9L360 112c-13.3 0-24-10.7-24-24l0-69.7c-3.7-1.5-7.8-2.3-11.9-2.3L192 16c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48zM433.9 89.9c1.9 1.9 3.6 3.9 5.1 6.1l.9 0 0 1.3c5.2 7.8 8 17 8 26.5L448 352c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-288c0-35.3 28.7-64 64-64L324.1 0c12.7 0 24.9 5.1 33.9 14.1l75.9 75.9zM360 96l57.4 0L352 30.6 352 88c0 4.4 3.6 8 8 8zM64 96l32 0 0 16-32 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l16 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default Files;