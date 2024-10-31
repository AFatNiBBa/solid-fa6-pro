
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=regular washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zm64 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM314.6 319.7c-3.5 .2-7 .3-10.6 .3c-32 0-56-16-80-32s-48-32-80-32c-3.5 0-7.1 .2-10.7 .4C146.4 218.9 182 192 224 192c53 0 96 43 96 96c0 11.1-1.9 21.8-5.4 31.7zM368 288A144 144 0 1 0 80 288a144 144 0 1 0 288 0z" />
    </Icon>
);

export default WashingMachine;