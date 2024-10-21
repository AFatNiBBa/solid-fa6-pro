
import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=duotone id-card-clip}
 * @preview ![id-card-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/id-card-clip.svg)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L352 64l0 64 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-64L64 64C28.7 64 0 92.7 0 128zM176 437.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7l-202.7 0c-5.9 0-10.7-4.8-10.7-10.7zM352 288a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M256 0c-17.7 0-32 14.3-32 32l0 96 128 0 0-96c0-17.7-14.3-32-32-32L256 0zm96 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM176 437.3c0 5.9 4.8 10.7 10.7 10.7l202.7 0c5.9 0 10.7-4.8 10.7-10.7c0-29.5-23.9-53.3-53.3-53.3l-117.3 0c-29.5 0-53.3 23.9-53.3 53.3z" />
    </Icon>
);

export default IdCardClip;