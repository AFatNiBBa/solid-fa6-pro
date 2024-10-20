
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fork` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=duotone fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M240 157.1c0 19.3 5.5 37.9 15.7 53.9c3.9 6.1 8.4 11.8 13.6 17c4.9 4.9 9.8 9.8 14.6 14.6c5.2 5.2 10.9 9.8 17 13.6c16 10.2 34.7 15.7 53.9 15.7c33.5 0 64.8-16.8 83.4-44.6l71-106.5c1.8-2.7 2.7-5.8 2.7-8.9c0-4.6-2-9.2-5.9-12.4c-6.4-5.2-15.6-4.8-21.5 1.1L393.4 192c-5.2 5.2-13.6 5.2-18.8 0c-4.9-4.9-5.2-12.8-.6-18.1l86.1-99.4c5.5-6.3 5.2-15.9-.8-21.8s-15.4-6.3-21.8-.8L338.1 138c-5.3 4.6-13.2 4.3-18.1-.6c-5.2-5.2-5.2-13.6 0-18.8l91.3-91.3c5.8-5.8 6.3-15.1 1.1-21.5S398-1.9 391.1 2.7l-106.5 71C256.8 92.3 240 123.6 240 157.1z" />
        <path d="M9.4 457.4L255.7 211c3.9 6.1 8.4 11.8 13.6 17L284 242.6c5.2 5.2 10.9 9.8 17 13.6L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z" />
    </Icon>
);

export default Fork;