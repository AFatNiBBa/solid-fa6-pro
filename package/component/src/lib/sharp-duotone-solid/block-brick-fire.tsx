
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-brick-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick-fire?s=sharp-duotone-solid block-brick-fire}
 * @preview ![block-brick-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/block-brick-fire.svg)
 */
const BlockBrickFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l0 80 64 0 0-80L32 32zm0 112l0 96 208 0 0-96L32 144zm0 128l0 96 64 0 0-96-64 0zm0 128l0 80 208 0 0-80L32 400zM128 32l0 80 256 0 0-80L128 32zm0 240l0 96 160.7 0c-.4-5.3-.7-10.7-.7-16.2c0-28.7 7.1-55.5 18-79.8l-178 0zM272 144l0 96 51.2 0c6.2-9.8 12.9-19.1 19.7-27.7c23-28.8 49.5-52.3 71.4-68.3L272 144zm0 256l0 80 65 0c-20.2-22.5-35.1-49.8-42.9-80L272 400zM416 32l0 80 64 0 0-80-64 0zm61.4 112l2.6 2.6 0-2.6-2.6 0z" />
        <path d="M320 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default BlockBrickFire;