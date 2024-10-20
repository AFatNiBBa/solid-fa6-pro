
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hot-tub-person` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hot-tub-person?s=sharp-duotone-solid hot-tub-person}
 * @preview ![hot-tub-person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hot-tub-person.svg)
 */
const HotTubPerson: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64a64 64 0 1 0 128 0A64 64 0 1 0 0 64zm0 96l0 96 256 0L128 160 0 160zM224 0l0 24c0 44.2 24.5 76 43.5 100.8l1.4 1.9c20.7 26.9 35 46.7 35 73.4l0 24 48 0 0-24c0-44.2-24.5-76-43.5-100.8L307 97.4C286.3 70.4 272 50.7 272 24l0-24L224 0zM336 0l0 24c0 44.2 24.5 76 43.5 100.8l1.4 1.9c20.7 26.9 35 46.7 35 73.4l0 24 48 0 0-24c0-44.2-24.5-76-43.5-100.8L419 97.4C398.3 70.4 384 50.7 384 24l0-24L336 0z" />
        <path d="M512 256L0 256 0 512l512 0 0-256zM128 336l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm96 0l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm96 0l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm96 0l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16z" />
    </Icon>
);

export default HotTubPerson;