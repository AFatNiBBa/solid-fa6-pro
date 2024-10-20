
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=solid projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80zM281 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56 56c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L281 39zM585 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L495 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l56-56zm-9 119l-64 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L64 192c-35.3 0-64 28.7-64 64L0 384c0 35.3 28.7 64 64 64l9.9 39.8C77.5 502 90.3 512 105 512l14 0c14.7 0 27.5-10 31-24.2L160 448l160 0c26.7 20.1 60 32 96 32c24.4 0 47.5-5.5 68.2-15.2l5.7 23c3.6 14.2 16.4 24.2 31 24.2l14 0c14.7 0 27.5-10 31-24.2L576 448c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64zM416 224a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Projector;