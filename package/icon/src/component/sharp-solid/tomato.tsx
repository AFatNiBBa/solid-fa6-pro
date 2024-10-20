
import { Icon } from "../../index";

/**
 * A component that renders the `tomato` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tomato?s=sharp-solid tomato}
 * @preview ![tomato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tomato.svg)
 */
const Tomato: typeof Icon = x => (
    <Icon {...x}>
        <path d="M235.4 1.4L198.2 31.8l15.1 18.5 .1 .2c.1 .2 .4 .5 .7 .9c.7 .9 1.7 2.3 3 4.2c2.6 3.7 6 9.2 9.5 15.9c1.6 3 3.1 6.2 4.5 9.6C147.8 88.1 87.5 128 87.5 128L144 144l-16 48 128-48s0 0 0 0l128 48-16-48 56.5-16s-59.6-39.5-142.4-46.8c-3.6-12.2-8.3-22.9-12.8-31.7c-4.5-8.8-9.1-16-12.5-21c-1.7-2.5-3.2-4.5-4.3-6c-.5-.7-1-1.3-1.3-1.7l-.4-.5-.1-.2c0 0 0 0-.1-.1c0 0 0 0 0 0s0 0 0 0L232 35.2 250.6 20 235.4 1.4zM78.8 158.8l-10.1-2.9C26.1 191.4 0 241.6 0 304C0 434.9 114.6 512 256 512s256-77.1 256-208c0-62.4-26.1-112.6-68.7-148.1l-10.1 2.8L409 165.7l5.4 16.2 21.2 63.6L372.8 222 256 178.2 139.2 222 76.4 245.5l21.2-63.6 5.4-16.2-24.3-6.9z" />
    </Icon>
);

export default Tomato;