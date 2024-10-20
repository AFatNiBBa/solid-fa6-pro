
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crate-apple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-apple?s=duotone crate-apple}
 * @preview ![crate-apple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crate-apple.svg)
 */
const CrateApple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-80L0 384zm48-96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM80 448a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM432 288a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32 160a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M160 54.9C160 24.6 184.6 0 214.9 0c5 0 9.1 4.1 9.1 9.1C224 39.4 199.4 64 169.1 64c-5 0-9.1-4.1-9.1-9.1zM32 171.4C32 127.8 52.4 80 96 80c15.6 0 34.1 5.9 47.2 11c10.7 4.2 22.8 4.2 33.5 0c13.1-5.1 31.6-11 47.2-11c43.6 0 64 47.8 64 91.4c0 19-3.1 36.7-8.4 52.6L40.4 224c-5.4-15.9-8.4-33.6-8.4-52.6zM313 224c4.5-16.4 7-34.1 7-52.6c0-26.1-6-55.1-20.3-78.6c-2.7-4.4-5.7-8.7-9-12.7c15 .6 32.2 6.1 44.6 11c10.7 4.2 22.8 4.2 33.5 0c13.1-5.1 31.6-11 47.2-11c43.6 0 64 47.8 64 91.4c0 19-3.1 36.7-8.4 52.6L313 224zM406.9 0c5 0 9.1 4.1 9.1 9.1C416 39.4 391.4 64 361.1 64c-5 0-9.1-4.1-9.1-9.1C352 24.6 376.6 0 406.9 0zM48 288a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 160a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM432 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default CrateApple;