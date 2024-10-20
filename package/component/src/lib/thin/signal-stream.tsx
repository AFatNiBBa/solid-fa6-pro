
import { Icon } from "../../index";

/**
 * A component that renders the `signal-stream` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=thin signal-stream}
 * @preview ![signal-stream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/signal-stream.svg)
 */
const SignalStream: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M82.3 65.9c3.3 2.9 3.7 8 .8 11.3C41.3 125 16 187.5 16 256s25.3 131 67 178.8c2.9 3.3 2.6 8.4-.8 11.3s-8.4 2.6-11.3-.8C26.8 394.7 0 328.5 0 256S26.8 117.3 71 66.7c2.9-3.3 8-3.7 11.3-.8zm411.5 0c3.3-2.9 8.4-2.6 11.3 .8c44.2 50.6 71 116.9 71 189.3s-26.8 138.7-71 189.3c-2.9 3.3-8 3.7-11.3 .8s-3.7-8-.8-11.3C534.7 387 560 324.5 560 256s-25.3-131-67-178.8c-2.9-3.3-2.6-8.4 .8-11.3zM240 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM154.6 141.1C128.1 172 112 212.1 112 256s16.1 84 42.6 114.9c2.9 3.3 2.5 8.4-.8 11.3s-8.4 2.5-11.3-.8C113.5 347.7 96 303.9 96 256s17.5-91.7 46.5-125.3c2.9-3.3 7.9-3.7 11.3-.8s3.7 7.9 .8 11.3zm278.9-10.4c29 33.6 46.5 77.4 46.5 125.3s-17.5 91.7-46.5 125.3c-2.9 3.3-7.9 3.7-11.3 .8s-3.7-7.9-.8-11.3C447.9 340 464 299.9 464 256s-16.1-84-42.6-114.9c-2.9-3.3-2.5-8.4 .8-11.3s8.4-2.5 11.3 .8z" />
    </Icon>
);

export default SignalStream;