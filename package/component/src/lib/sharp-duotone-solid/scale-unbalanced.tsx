
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scale-unbalanced` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-unbalanced?s=sharp-duotone-solid scale-unbalanced}
 * @preview ![scale-unbalanced](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scale-unbalanced.svg)
 */
const ScaleUnbalanced: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M87.5 139.8l20.2 60.7 30.4-10.1 135.5-45.2c4.5 3.2 9.3 5.9 14.4 8.2L288 480l0 32 32 0 192 0 32 0 0-64-32 0-160 0 0-294.7c21-9.2 37.2-27 44.2-49l125.9-42L501.9 1.6l-113 37.7C375 15.8 349.3 0 320 0c-44.2 0-80 35.8-80 80c0 3 .2 5.9 .5 8.8L117.9 129.6 87.5 139.8z" />
        <path d="M481.5 96L496 96l32 0 14.5 0 6.7 12.9 88 168 2.7 5.2 0 5.9 0 32 0 9.9-7 7-40 40-7 7-9.9 0-128 0-9.9 0-7-7-40-40-7-7 0-9.9 0-32 0-5.9 2.7-5.2 88-168L481.5 96zm29 48L435.1 288l153.8 0L513.5 144l-3 0zm-413 80l14.5 0 32 0 14.5 0 6.7 12.9 88 168 2.7 5.2 0 5.9 0 32 0 9.9-7 7-40 40-7 7-9.9 0L64 512l-9.9 0-7-7L7 465l-7-7L0 448l0-32 0-5.9 2.7-5.2 88-168L97.5 224zm29 48L51.1 416l153.8 0L129.5 272l-3 0z" />
    </Icon>
);

export default ScaleUnbalanced;