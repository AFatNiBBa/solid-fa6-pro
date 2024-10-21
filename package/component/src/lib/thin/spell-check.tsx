
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=thin spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M119.3 4.8C118.1 1.9 115.2 0 112 0s-6.1 1.9-7.3 4.8L.7 244.8c-1.8 4.1 .1 8.8 4.2 10.5s8.8-.1 10.5-4.2L48 175.8l0 .2 128 0 0-.2 32.7 75.4c1.8 4.1 6.5 5.9 10.5 4.2s5.9-6.5 4.2-10.5l-104-240zM169.1 160L54.9 160 112 28.1 169.1 160zM256 16l0 104 0 120c0 8.8 7.2 16 16 16l104 0c39.8 0 72-32.2 72-72c0-34.2-23.9-62.8-55.8-70.2C406.7 102.1 416 84.1 416 64c0-35.3-28.7-64-64-64L272 0c-8.8 0-16 7.2-16 16zm96 96l-80 0 0-96 80 0c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-80 16l80 0 24 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-104 0 0-112zM565.7 301.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L351.8 492.9 237.5 386.2c-3.2-3-8.3-2.8-11.3 .4s-2.8 8.3 .4 11.3l120 112c3.2 2.9 8.1 2.9 11.1-.2l208-208z" />
    </Icon>
);

export default SpellCheck;