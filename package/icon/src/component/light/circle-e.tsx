
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-e` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=light circle-e}
 * @preview ![circle-e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTYwQzM0NC44NDQgMTYwIDM1MiAxNTIuODQ0IDM1MiAxNDRTMzQ0Ljg0NCAxMjggMzM2IDEyOEgxNzZDMTY3LjE1NiAxMjggMTYwIDEzNS4xNTYgMTYwIDE0NFYzNjhDMTYwIDM3Ni44NDQgMTY3LjE1NiAzODQgMTc2IDM4NEgzMzZDMzQ0Ljg0NCAzODQgMzUyIDM3Ni44NDQgMzUyIDM2OFMzNDQuODQ0IDM1MiAzMzYgMzUySDE5MlYyNzJIMjg4QzI5Ni44NDQgMjcyIDMwNCAyNjQuODQ0IDMwNCAyNTZTMjk2Ljg0NCAyNDAgMjg4IDI0MEgxOTJWMTYwSDMzNlpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDY0QzE0MS4zMDkgNDY0IDQ4IDM3MC42OTEgNDggMjU2UzE0MS4zMDkgNDggMjU2IDQ4UzQ2NCAxNDEuMzA5IDQ2NCAyNTZTMzcwLjY5MSA0NjQgMjU2IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleE(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 160C344.844 160 352 152.844 352 144S344.844 128 336 128H176C167.156 128 160 135.156 160 144V368C160 376.844 167.156 384 176 384H336C344.844 384 352 376.844 352 368S344.844 352 336 352H192V272H288C296.844 272 304 264.844 304 256S296.844 240 288 240H192V160H336ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}