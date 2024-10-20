
import { Icon } from "../../index";

/**
 * A component that renders the `fax` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=light fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64c0-17.7 14.3-32 32-32l196.1 0c8.5 0 16.6 3.4 22.6 9.4l27.9 27.9c6 6 9.4 14.1 9.4 22.6l0 68.1 32 0 0-68.1c0-17-6.7-33.3-18.7-45.3L433.4 18.7C421.4 6.7 405.1 0 388.1 0L192 0c-35.3 0-64 28.7-64 64l0 72.6c-9.4-5.4-20.3-8.6-32-8.6l-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l32 0c19.1 0 36.3-8.4 48-21.7c11.7 13.3 28.9 21.7 48 21.7l256 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-288 0 0-128zm0 160l288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-224zm-32-32l0 16 0 240c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM296 304a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM272 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Fax;