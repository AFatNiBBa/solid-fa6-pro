
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=light spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M126.7 9.7C124.2 3.8 118.4 0 112 0s-12.2 3.8-14.7 9.7l-96 224c-3.5 8.1 .3 17.5 8.4 21s17.5-.3 21-8.4L54 192l116 0 23.3 54.3c3.5 8.1 12.9 11.9 21 8.4s11.9-12.9 8.4-21l-96-224zM156.3 160l-88.6 0L112 56.6 156.3 160zM256 16l0 112 0 112c0 8.8 7.2 16 16 16l104 0c39.8 0 72-32.2 72-72c0-31.1-19.7-57.6-47.3-67.6C410.3 104.1 416 88.7 416 72c0-39.8-32.2-72-72-72L272 0c-8.8 0-16 7.2-16 16zm88 96l-56 0 0-80 56 0c22.1 0 40 17.9 40 40s-17.9 40-40 40zm-56 32l56 0 32 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-88 0 0-80zM571.3 299.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L352 473.4 251.3 372.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l208-208z" />
    </Icon>
);

export default SpellCheck;