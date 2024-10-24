
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-ngo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-ngo?s=sharp-duotone-solid building-ngo}
 * @preview ![building-ngo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-ngo.svg)
 */
const BuildingNgo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l144 0 0-128 96 0 0 128 144 0L384 0 0 0zM32 64l16 0 8 0 9.9 0 4.4 8.8L96 124.2 96 80l0-16 32 0 0 16 0 96 0 16-16 0-8 0-9.9 0-4.4-8.8L64 131.8 64 176l0 16-32 0 0-16 0-96 0-16zM64 224l64 0 0 64-64 0 0-64zM152 64l16 0 48 0 16 0 0 32-16 0-32 0 0 64 16 0 0-16 0-16 32 0 0 16 0 32 0 16-16 0-48 0-16 0 0-16 0-96 0-16zm8 160l64 0 0 64-64 0 0-64zm96-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32zm0 112l64 0 0 64-64 0 0-64zm32-112l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M48 64L32 64l0 16 0 96 0 16 32 0 0-16 0-44.2 25.7 51.4 4.4 8.8 9.9 0 8 0 16 0 0-16 0-96 0-16L96 64l0 16 0 44.2L70.3 72.8 65.9 64 56 64l-8 0zm104 0l0 16 0 96 0 16 16 0 48 0 16 0 0-16 0-32 0-16-32 0 0 16 0 16-16 0 0-64 32 0 16 0 0-32-16 0-48 0-16 0zM304 96c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm-48 16l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
    </Icon>
);

export default BuildingNgo;