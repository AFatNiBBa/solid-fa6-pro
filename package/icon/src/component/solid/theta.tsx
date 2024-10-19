
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `theta` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=solid theta}
 * @preview ![theta](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTZDODUuOTYxIDE2IDAgMTIzLjQ1MSAwIDI1NlM4NS45NjEgNDk2IDE5MiA0OTZTMzg0IDM4OC41NDkgMzg0IDI1NlMyOTguMDM5IDE2IDE5MiAxNlpNMTkyIDk2QzI0My4wMjkgOTYgMjg2Ljk5IDE0Ny45OSAyOTkuODQ2IDIxNkg4NC4xNTRDOTcuMDEgMTQ3Ljk5IDE0MC45NzMgOTYgMTkyIDk2Wk0xOTIgNDE2QzE0MC45NzMgNDE2IDk3LjAxIDM2NC4wMSA4NC4xNTQgMjk2SDI5OS44NDZDMjg2Ljk5IDM2NC4wMSAyNDMuMDI5IDQxNiAxOTIgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Theta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 16C85.961 16 0 123.451 0 256S85.961 496 192 496S384 388.549 384 256S298.039 16 192 16ZM192 96C243.029 96 286.99 147.99 299.846 216H84.154C97.01 147.99 140.973 96 192 96ZM192 416C140.973 416 97.01 364.01 84.154 296H299.846C286.99 364.01 243.029 416 192 416Z" />
        </Icon>
    </>
}