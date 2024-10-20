
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scale-unbalanced-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-unbalanced-flip?s=duotone scale-unbalanced-flip}
 * @preview ![scale-unbalanced-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scale-unbalanced-flip.svg)
 */
const ScaleUnbalancedFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 480c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-326.7c5.1-2.2 9.9-5 14.4-8.2l135.5 45.2c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L399.5 88.8c.3-2.9 .5-5.8 .5-8.8c0-44.2-35.8-80-80-80c-29.3 0-55 15.8-68.9 39.3L138.1 1.6c-16.8-5.6-34.9 3.5-40.5 20.2s3.5 34.9 20.2 40.5l125.9 42c7 22 23.3 39.9 44.2 49L288 448l-160 0c-17.7 0-32 14.3-32 32z" />
        <path d="M128 163.8L55.6 288l144.9 0L128 163.8zM254 305.1C243.2 350 190.9 384 128 384S12.8 350 2 305.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1zm256.9-13.3L438.4 416l144.9 0L510.8 291.8zm126 141.3C626 478 573.7 512 510.8 512s-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1z" />
    </Icon>
);

export default ScaleUnbalancedFlip;