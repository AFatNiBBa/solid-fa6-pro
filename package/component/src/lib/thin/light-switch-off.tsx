
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=thin light-switch-off}
 * @preview ![light-switch-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/light-switch-off.svg)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l256 0c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48L64 496zM0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448zM272 248l-160 0 0-104c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 104zM112 264l160 0 0 104c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-104zM96 368c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48l0 224zm96 72a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-400a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM152 352l0-48 80 0 0 48-80 0zm-16 0c0 8.8 7.2 16 16 16l80 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 48z" />
    </Icon>
);

export default LightSwitchOff;