
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crate-apple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-apple?s=sharp-duotone-solid crate-apple}
 * @preview ![crate-apple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crate-apple.svg)
 */
const CrateApple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l40.4 0 239.2 0 33.4 0 158.6 0 40.4 0 0 128L0 352 0 224zM0 384l512 0 0 128L0 512 0 384zm48-96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 160a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM432 288a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 160a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M160 54.9l0 9.1 9.1 0C199.4 64 224 39.4 224 9.1L224 0l-9.1 0C184.6 0 160 24.6 160 54.9zm192 0l0 9.1 9.1 0C391.4 64 416 39.4 416 9.1L416 0l-9.1 0C376.6 0 352 24.6 352 54.9zM96 80c-43.6 0-64 47.8-64 91.4c0 19 3.1 36.7 8.4 52.6l239.2 0c5.4-15.9 8.4-33.6 8.4-52.6c0-43.6-20.4-91.4-64-91.4c-27.4 0-64 18.3-64 18.3s-36.6-18.3-64-18.3zm384 91.4c0-43.6-20.4-91.4-64-91.4c-27.4 0-64 18.3-64 18.3s-34.3-17.1-61.3-18.2c3.4 4 6.4 8.3 9 12.7C314 116.4 320 145.3 320 171.4c0 18.5-2.5 36.1-7 52.6l158.6 0c5.3-15.9 8.4-33.6 8.4-52.6zM80 288a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM448 304a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default CrateApple;