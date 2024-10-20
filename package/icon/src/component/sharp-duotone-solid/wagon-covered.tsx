
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wagon-covered` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wagon-covered?s=sharp-duotone-solid wagon-covered}
 * @preview ![wagon-covered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wagon-covered.svg)
 */
const WagonCovered: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 16l0 208L64 224 0 0zM288 400.2A112 112 0 1 1 64 400a112 112 0 1 1 224 .2zM114 384l46 0 0-46c-22.5 5.8-40.2 23.5-46 46zm0 32c5.8 22.5 23.5 40.2 46 46l0-46-46 0zm78-78l0 46 46 0c-5.8-22.5-23.5-40.2-46-46zm0 78l0 46c22.5-5.8 40.2-23.5 46-46l-46 0zM256 16l128 0 0 208-128 0 0-208zM576 400.2A112 112 0 1 1 352 400a112 112 0 1 1 224 .2zM402 384l46 0 0-46c-22.5 5.8-40.2 23.5-46 46zm0 32c5.8 22.5 23.5 40.2 46 46l0-46-46 0zM416 16L640 0 576 224l-160 0 0-208zm64 322l0 46 46 0c-5.8-22.5-23.5-40.2-46-46zm0 78l0 46c22.5-5.8 40.2-23.5 46-46l-46 0z" />
        <path d="M576 256L64 256l0 64 33.6 0c20.2-19.8 47.9-32 78.4-32c61.9 0 112 50.1 112 112c0 5.4-.4 10.8-1.1 16l66.3 0c-.7-5.2-1.1-10.6-1.1-16c0-61.9 50.1-112 112-112c30.5 0 58.2 12.2 78.4 32l33.6 0 0-64z" />
    </Icon>
);

export default WagonCovered;