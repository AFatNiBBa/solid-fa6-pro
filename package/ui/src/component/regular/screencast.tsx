
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=regular screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 80L64 80c-8.8 0-16 7.2-16 16l0 97.1c-7.9-.7-15.9-1.1-24-1.1L0 192 0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-224 0 0-24c0-8.1-.4-16.1-1.1-24L512 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16zM24 224c128.1 0 232 103.9 232 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 344c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Screencast;