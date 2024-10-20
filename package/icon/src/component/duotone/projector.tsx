
import { Icon, generic } from "../../index";

/**
 * A component that renders the `projector` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=duotone projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256L0 384c0 35.3 28.7 64 64 64l9.9 39.8C77.5 502 90.3 512 105 512l14 0c14.7 0 27.5-10 31-24.2L160 448l160 0c-38.9-29.2-64-75.7-64-128c0-1.6 0-3.3 .1-4.9s.1-3.2 .2-4.9c.2-3.2 .5-6.4 .9-9.6c.8-6.3 1.9-12.6 3.4-18.6c3-12.2 7.3-23.8 12.9-34.7c.7-1.4 1.4-2.7 2.1-4.1c.7-1.4 1.5-2.7 2.3-4c1.5-2.6 3.2-5.2 4.8-7.7c3.4-5.1 7-9.9 10.9-14.6c7.8-9.3 16.7-17.7 26.4-25L64 192c-35.3 0-64 28.7-64 64zm128 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM247 39c-9.4 9.4-9.4 24.6 0 33.9l56 56c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L281 39c-9.4-9.4-24.6-9.4-33.9 0zM392 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24zm92.2 440.8l5.7 23c3.6 14.2 16.4 24.2 31 24.2l14 0c14.7 0 27.5-10 31-24.2L576 448c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-64 0c38.9 29.2 64 75.7 64 128c0 2 0 4-.1 6s-.2 4-.3 5.9c-.3 3.9-.7 7.8-1.3 11.7c-1.1 7.7-2.8 15.2-5 22.5c-4.4 14.6-10.8 28.3-18.8 40.8c-16.2 25-39.1 45.2-66.2 58zM495 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l56-56c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L495 95z" />
        <path d="M512 320a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-256 0a160 160 0 1 1 320 0 160 160 0 1 1 -320 0zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Projector;