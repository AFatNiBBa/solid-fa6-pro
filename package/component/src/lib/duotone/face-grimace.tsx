
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grimace` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grimace?s=duotone face-grimace}
 * @preview ![face-grimace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-grimace.svg)
 */
const FaceGrimace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm112.7 88c3.8-22.7 23.6-40 47.3-40l8 0 0 40-55.3 0zm0 16l55.3 0 0 40-8 0c-23.8 0-43.5-17.3-47.3-40zm31.7-152c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zM184 304l64 0 0 40-64 0 0-40zm0 56l64 0 0 40-64 0 0-40zm80-56l64 0 0 40-64 0 0-40zm0 56l64 0 0 40-64 0 0-40zM368.4 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM344 304l8 0c23.8 0 43.5 17.3 47.3 40L344 344l0-40zm0 56l55.3 0c-3.8 22.7-23.6 40-47.3 40l-8 0 0-40z" />
        <path d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default FaceGrimace;