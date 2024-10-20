
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=sharp-regular projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 24l0-24L376 0l0 24 0 80 0 24 48 0 0-24 0-80zM265 39l-17-17L214.1 56l17 17 56 56 17 17L337.9 112 321 95 265 39zM569 73l17-17L552 22.1 535 39 479 95l-17 17L496 145.9l17-17 56-56zM288 320a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm272 0c0-29.1-7.8-56.5-21.4-80l53.4 0 0 160-53.4 0c13.6-23.5 21.4-50.9 21.4-80zM400 480c36 0 69.3-11.9 96-32l16 0 0 40 0 24 48 0 0-24 0-40 32 0 48 0 0-48 0-160 0-48-48 0-96 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L48 192 0 192l0 48L0 400l0 48 48 0 32 0 0 40 0 24 48 0 0-24 0-40 176 0c26.7 20.1 60 32 96 32zM240 320c0 29.1 7.8 56.5 21.4 80L48 400l0-160 213.4 0c-13.6 23.5-21.4 50.9-21.4 80zm-112 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Projector;