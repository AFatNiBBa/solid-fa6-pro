
import { Icon } from "../../index";

/**
 * A component that renders the `waffle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waffle?s=light waffle}
 * @preview ![waffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/waffle.svg)
 */
const Waffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM272 80l0 64 64 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 64 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 64 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm-96 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm0-32l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default Waffle;