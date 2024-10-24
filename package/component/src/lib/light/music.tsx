
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=light music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 23c0-12.7-10.3-23-23-23c-2.3 0-4.6 .3-6.8 1l-311 95.7C164.6 98.8 160 105 160 112l0 120 0 140.4C143 359.7 120.6 352 96 352c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80l0-185.7 288-88.6 0 150.7c-17-12.7-39.4-20.4-64-20.4c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80l0-231.6c0-.2 0-.5 0-.7L512 23zM480 368c0 21.3-22.9 48-64 48s-64-26.7-64-48s22.9-48 64-48s64 26.7 64 48zM160 432c0 21.3-22.9 48-64 48s-64-26.7-64-48s22.9-48 64-48s64 26.7 64 48zM480 124.2L192 212.8l0-89L480 35.2l0 89z" />
    </Icon>
);

export default Music;