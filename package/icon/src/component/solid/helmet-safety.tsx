
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `helmet-safety` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=solid helmet-safety}
 * @preview ![helmet-safety](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMjgwLjg5MUM1NDQgMTkxLjcyMyA0ODIuMTY2IDExNS40NzMgNDA0LjM4OSA4My41MjdMMzUyIDE3NC4yMjNWNDkuNzc3QzM1MiAzOS45MTQgMzQ0LjA4NCAzMiAzMzQuMjIzIDMySDI0MS43NzdDMjMxLjkxNiAzMiAyMjQgMzkuOTE0IDIyNCA0OS43NzdWMTc0LjIyM0wxNzEuNjExIDgzLjUyN0M5My44MzQgMTE1LjQ3MyAzMiAxOTEuNzIzIDMyIDI4MC44OTFWMzUySDU0NFYyODAuODkxWk01NzQuNjg4IDM5My42NTZDNTcyLjE1NiAzODcuODEyIDU2Ni4zNzUgMzg0IDU2MCAzODRIMTZDOS42MjUgMzg0IDMuODQ0IDM4Ny44MTIgMS4zMTMgMzkzLjY1NkMtMS4yMTkgMzk5LjUzMSAtMC4wMzEgNDA2LjM0NCA0LjM3NSA0MTFDNy4wMzEgNDEzLjgxMiA3Mi4wMzEgNDgwIDI4OCA0ODBTNTY4Ljk2OSA0MTMuODEyIDU3MS42MjUgNDExQzU3Ni4wMzEgNDA2LjM0NCA1NzcuMjE5IDM5OS41MzEgNTc0LjY4OCAzOTMuNjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HelmetSafety(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 280.891C544 191.723 482.166 115.473 404.389 83.527L352 174.223V49.777C352 39.914 344.084 32 334.223 32H241.777C231.916 32 224 39.914 224 49.777V174.223L171.611 83.527C93.834 115.473 32 191.723 32 280.891V352H544V280.891ZM574.688 393.656C572.156 387.812 566.375 384 560 384H16C9.625 384 3.844 387.812 1.313 393.656C-1.219 399.531 -0.031 406.344 4.375 411C7.031 413.812 72.031 480 288 480S568.969 413.812 571.625 411C576.031 406.344 577.219 399.531 574.688 393.656Z" />
        </Icon>
    </>
}