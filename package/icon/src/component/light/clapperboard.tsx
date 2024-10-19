
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clapperboard` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=light clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk00MzMuMzc1IDY0TDMzNy4zNzUgMTYwSDIzMC42MjVMMzI2LjYyNSA2NEg0MzMuMzc1Wk0yODEuMzc1IDY0TDE4NS4zNzUgMTYwSDc4LjYyNUwxNzQuNjI1IDY0SDI4MS4zNzVaTTMyIDk2QzMyIDc4LjM1NSA0Ni4zNTUgNjQgNjQgNjRIMTI5LjM3NUwzMy4zNzUgMTYwSDMyVjk2Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlYxOTJINDgwVjQxNlpNNDgwIDE2MEgzODIuNjI1TDQ2OS43OTcgNzIuODI4QzQ3Ni4wMDggNzguNjY4IDQ4MCA4Ni44MjIgNDgwIDk2VjE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Clapperboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM433.375 64L337.375 160H230.625L326.625 64H433.375ZM281.375 64L185.375 160H78.625L174.625 64H281.375ZM32 96C32 78.355 46.355 64 64 64H129.375L33.375 160H32V96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V192H480V416ZM480 160H382.625L469.797 72.828C476.008 78.668 480 86.822 480 96V160Z" />
        </Icon>
    </>
}