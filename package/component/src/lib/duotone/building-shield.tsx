
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-shield` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-shield?s=duotone building-shield}
 * @preview ![building-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/building-shield.svg)
 */
const BuildingShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c6.7 0 13.1-1.4 18.9-3.9c-74.6-56.7-96.4-143.4-98.7-201.5c-.1-.8-.2-1.7-.2-2.6l0-7.8 0-24.2 0-32c0-8.8 7.2-16 16-16l32 0 37.6 0L384 207l0-159c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48zm64 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm96-128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm96-128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M440.9 225.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C294 277.4 288 286.2 288 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C550.1 464.8 576 359.3 576 296c0-9.8-6-18.6-15.1-22.3l-120-48zm-8.9 236l0-187.8L527.4 312c-3.9 50.7-27.2 116.7-95.4 149.7z" />
    </Icon>
);

export default BuildingShield;