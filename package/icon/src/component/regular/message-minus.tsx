
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-minus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-minus?s=regular message-minus}
 * @preview ![message-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44MzggMTcxLjAyMyA1MTUuNDc5IDE3OS4xMjUgNTA5LjYyN0wzMDQgNDE2LjAwMkg0NDhDNDgzLjI1IDQxNi4wMDIgNTEyIDM4Ny4yNTIgNTEyIDM1Mi4wMDJWNjRDNTEyIDI4Ljc1IDQ4My4yNSAwIDQ0OCAwWk00NjQgMzUyLjAwMkM0NjQgMzYwLjc1MiA0NTYuNzUgMzY4LjAwMiA0NDggMzY4LjAwMkgyODhMMjA4IDQyOC4wMDJWMzY4LjAwMkg2NEM1NS4yNSAzNjguMDAyIDQ4IDM2MC43NTIgNDggMzUyLjAwMlY2NEM0OCA1NS4yNSA1NS4yNSA0OCA2NCA0OEg0NDhDNDU2Ljc1IDQ4IDQ2NCA1NS4yNSA0NjQgNjRWMzUyLjAwMlpNMzM2IDE4NC4wMDJIMTc2QzE2Mi43MzggMTg0LjAwMiAxNTIgMTk0Ljc0MiAxNTIgMjA4QzE1MiAyMjEuMjU2IDE2Mi43MyAyMzEuOTk4IDE3NiAyMzEuOTk4SDMzNkMzNDkuMjYyIDIzMS45OTggMzYwIDIyMS4yNTggMzYwIDIwOFMzNDkuMjYyIDE4NC4wMDIgMzM2IDE4NC4wMDJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MessageMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.838 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM464 352.002C464 360.752 456.75 368.002 448 368.002H288L208 428.002V368.002H64C55.25 368.002 48 360.752 48 352.002V64C48 55.25 55.25 48 64 48H448C456.75 48 464 55.25 464 64V352.002ZM336 184.002H176C162.738 184.002 152 194.742 152 208C152 221.256 162.73 231.998 176 231.998H336C349.262 231.998 360 221.258 360 208S349.262 184.002 336 184.002Z" />
        </Icon>
    </>
}