
import { Icon } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=regular volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M159.9 201.9L272 102.3l0 307.3L159.9 310.1c-4.4-3.9-10.1-6.1-15.9-6.1l-88 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l88 0c5.9 0 11.6-2.2 15.9-6.1zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160 56 160c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l78.9 0L270.4 472.5c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8l0-388.4C320 45.3 306.7 32 290.2 32zM425 167c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55z" />
    </Icon>
);

export default VolumeXmark;