
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=regular square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM216.7 255.6L96.1 189.3C97.5 172.9 111.3 160 128 160l192 0c16.7 0 30.5 12.9 31.9 29.3L231.3 255.6c-2.2 1.2-4.7 1.9-7.3 1.9s-5.1-.6-7.3-1.9zm30 28L352 225.7l0 94.3c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-94.3 105.3 57.9c7 3.8 14.8 5.8 22.7 5.8s15.8-2 22.7-5.8z" />
    </Icon>
);

export default SquareEnvelope;