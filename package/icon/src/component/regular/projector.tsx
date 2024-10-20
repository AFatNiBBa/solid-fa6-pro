
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=regular projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80zM265 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56 56c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L265 39zM569 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L479 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l56-56zM288 320a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm272 0c0-29.1-7.8-56.5-21.4-80l37.4 0c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-37.4 0c13.6-23.5 21.4-50.9 21.4-80zM400 480c36 0 69.3-11.9 96-32l16 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 16 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-80 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L64 192c-35.3 0-64 28.7-64 64L0 384c0 35.3 28.7 64 64 64l16 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 176 0c26.7 20.1 60 32 96 32zM240 320c0 29.1 7.8 56.5 21.4 80L64 400c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16l197.4 0c-13.6 23.5-21.4 50.9-21.4 80zm-112 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Projector;