
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badger-honey` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badger-honey?s=sharp-duotone-solid badger-honey}
 * @preview ![badger-honey](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/badger-honey.svg)
 */
const BadgerHoney: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M83.5 171.7C95.8 220.2 139.7 256 192 256l80 0c53.3-32 106.7-64 160-96l41.4 0 45.3 0 51.3 0-86.4-48-40.2 0c-18 9-35.9 18-53.9 26.9c-3.4 1.7-6.8 3.4-10.1 5.1L368 144l-224 0c-24.2 0-45.9 10.7-60.5 27.7zm453.6 79.6L560 288l29.5-47.2c-18.1 1.6-35.6 5.3-52.4 10.6z" />
        <path d="M180.6 352L160 400l24 80-96 0L64 400l20.7-72.5C70.3 317 58.1 303.5 49.1 288L0 288l0-32 0-32C0 153.3 57.3 96 128 96l32 0 32 0 176 0 64-32 64 0 144 80 0 64-32 32c-94 0-177.2 62.9-215 102.1L416 480l-96 0L298.7 352l-118.1 0zM368 144l-224 0c-24.2 0-45.9 10.7-60.5 27.7C95.8 220.2 139.7 256 192 256l80 0 160-96 41.4 0c-.9 2.5-1.4 5.2-1.4 8c0 13.3 10.7 24 24 24s24-10.7 24-24c0-2.8-.5-5.5-1.4-8l51.3 0-86.4-48-40.2 0-53.9 26.9L379.3 144 368 144z" />
    </Icon>
);

export default BadgerHoney;