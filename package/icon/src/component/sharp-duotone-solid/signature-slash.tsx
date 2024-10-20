
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signature-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-slash?s=sharp-duotone-solid signature-slash}
 * @preview ![signature-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signature-slash.svg)
 */
const SignatureSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 368l0 48 24 0 40.3 0c-.2-2.8-.3-5.6-.3-8.5L64 368l-40 0L0 368zM96 264.2L96 288l0 160 0 32 32 0 64 0 18.6 0 9.2-16.1 25.5-44.7c17.5-30.5 31.9-62.7 43.1-95.9L181.1 238.7l-62.3 18.7L96 264.2zM138.3 84.6L192 126.3c.9-16.9 14.8-30.3 32-30.3c17.7 0 32 14.3 32 32l0 7.8c0 13-.5 26-1.6 39c33.7 26.1 67.3 52.3 101 78.4l42.7-12.8L386 276.9 441.5 320 544 320l32 0 0-64-32 0-83.6 0 18-53.9 19.5-58.5-59 17.7L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3l0-7.8c0-53-43-96-96-96c-37.4 0-69.8 21.4-85.7 52.6zM160 311.8l71.8-21.5c-10.4 33.8-24.5 66.4-42.1 97.2L173.4 416 160 416l0-104.2zM283.5 416l122.6 0-60.9-48-39.4 0c-6.7 16.3-14.2 32.3-22.3 48zm219.8-48c20.6 16 41.2 32 61.8 48l50.8 0 24 0 0-48-24 0-112.7 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default SignatureSlash;