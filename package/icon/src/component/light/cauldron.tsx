
import { Icon } from "../../index";

/**
 * A component that renders the `cauldron` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cauldron?s=light cauldron}
 * @preview ![cauldron](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cauldron.svg)
 */
const Cauldron: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm96 24a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM60.1 244.9C72 223 85.2 204.3 94.9 192L224 192l129.1 0c9.7 12.3 22.9 31 34.8 52.9C404.3 275 416 307.1 416 334.4c0 45.1-21.4 80.4-56.1 105.5C324.5 465.5 275.4 480 224 480s-100.5-14.5-135.9-40.1C53.4 414.8 32 379.5 32 334.4c0-27.3 11.7-59.4 28.1-89.5zM55.2 192C30.2 228.1 0 283.9 0 334.4c0 37.4 11.9 69.4 32 95.5L32 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-34.2C106.3 494.6 164.6 512 224 512s117.7-17.4 160-50.2l0 34.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-66.1c20.1-26.1 32-58.1 32-95.5c0-50.5-30.2-106.3-55.2-142.4l39.2 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0-144 0L80 160l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l39.2 0z" />
    </Icon>
);

export default Cauldron;