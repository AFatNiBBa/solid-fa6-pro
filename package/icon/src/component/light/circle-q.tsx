
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-q` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=light circle-q}
 * @preview ![circle-q](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTI4QzE4NS40MDYgMTI4IDEyOCAxODUuNDIyIDEyOCAyNTZTMTg1LjQwNiAzODQgMjU2IDM4NEMyODUuNTIzIDM4NCAzMTIuNCAzNzMuNTUxIDMzNC4wNzYgMzU2LjcwMUwzNTYuNjg4IDM3OS4zMTJDMzU5LjgxMiAzODIuNDM4IDM2My45MDYgMzg0IDM2OCAzODRTMzc2LjE4OCAzODIuNDM4IDM3OS4zMTIgMzc5LjMxMkMzODUuNTYyIDM3My4wNjIgMzg1LjU2MiAzNjIuOTM3IDM3OS4zMTIgMzU2LjY4OEwzNTYuNjk5IDMzNC4wNzRDMzczLjU1MSAzMTIuMzk2IDM4NCAyODUuNTIgMzg0IDI1NkMzODQgMTg1LjQyMiAzMjYuNTk0IDEyOCAyNTYgMTI4Wk0zMzQuMDgyIDMxMS40NTdMMjk5LjMxMiAyNzYuNjg3QzI5My4wNjIgMjcwLjQzNyAyODIuOTM3IDI3MC40MzcgMjc2LjY4OCAyNzYuNjg3UzI3MC40MzggMjkzLjA2MiAyNzYuNjg4IDI5OS4zMTJMMzExLjQ1NyAzMzQuMDgyQzI5NS43NjIgMzQ1LjI2NiAyNzYuNjk5IDM1MiAyNTYgMzUyQzIwMy4wNjIgMzUyIDE2MCAzMDguOTM4IDE2MCAyNTZTMjAzLjA2MiAxNjAgMjU2IDE2MFMzNTIgMjAzLjA2MiAzNTIgMjU2QzM1MiAyNzYuNjk5IDM0NS4yNjYgMjk1Ljc2MiAzMzQuMDgyIDMxMS40NTdaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleQ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 128C185.406 128 128 185.422 128 256S185.406 384 256 384C285.523 384 312.4 373.551 334.076 356.701L356.688 379.312C359.812 382.438 363.906 384 368 384S376.188 382.438 379.312 379.312C385.562 373.062 385.562 362.937 379.312 356.688L356.699 334.074C373.551 312.396 384 285.52 384 256C384 185.422 326.594 128 256 128ZM334.082 311.457L299.312 276.687C293.062 270.437 282.937 270.437 276.688 276.687S270.438 293.062 276.688 299.312L311.457 334.082C295.762 345.266 276.699 352 256 352C203.062 352 160 308.938 160 256S203.062 160 256 160S352 203.062 352 256C352 276.699 345.266 295.762 334.082 311.457ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}